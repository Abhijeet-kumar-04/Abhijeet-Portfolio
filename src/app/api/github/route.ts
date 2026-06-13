import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN environment variable" }, { status: 500 });
  }

  const query = `
    query {
      user(login: "Abhijeet-kumar-04") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
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
    
    // Safely extract the data
    const totalContributions = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || null;
    const projectsBacked = data?.data?.user?.repositoriesContributedTo?.totalCount || null;

    if (totalContributions === null) {
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
