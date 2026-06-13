import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN environment variable" }, { status: 500 });
  }

  const query = `
    query {
      user(login: "Abhijeet-kumar-04") {
        y2026: contributionsCollection(from: "2026-01-01T00:00:00Z", to: "2026-12-31T23:59:59Z") {
          contributionCalendar { totalContributions }
        }
        y2025: contributionsCollection(from: "2025-01-01T00:00:00Z", to: "2025-12-31T23:59:59Z") {
          contributionCalendar { totalContributions }
        }
        y2024: contributionsCollection(from: "2024-01-01T00:00:00Z", to: "2024-12-31T23:59:59Z") {
          contributionCalendar { totalContributions }
        }
        repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
          totalCount
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Cache this response for 1 hour to prevent rate limits
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API responded with status ${response.status}`);
    }

    const data = await response.json();
    
    // Safely extract and sum the data for all years
    const y2026 = data?.data?.user?.y2026?.contributionCalendar?.totalContributions || 0;
    const y2025 = data?.data?.user?.y2025?.contributionCalendar?.totalContributions || 0;
    const y2024 = data?.data?.user?.y2024?.contributionCalendar?.totalContributions || 0;
    
    const totalContributions = y2026 + y2025 + y2024;
    const projectsBacked = data?.data?.user?.repositoriesContributedTo?.totalCount || null;

    if (totalContributions === 0 && !data?.data?.user) {
      throw new Error("Invalid response format from GitHub");
    }

    return NextResponse.json({
      totalContributions,
      projectsBacked
    });

  } catch (error) {
    console.error("GitHub API Route Error:", error);
    return NextResponse.json({ error: "Failed to fetch secure data" }, { status: 500 });
  }
}
