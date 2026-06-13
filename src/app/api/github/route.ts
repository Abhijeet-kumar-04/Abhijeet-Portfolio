import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN environment variable" }, { status: 500 });
  }

  const query = `
    query {
      user(login: "Abhijeet-kumar-04") {
        createdAt
        followers { totalCount }
        following { totalCount }
        repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
          totalCount
          nodes {
            stargazerCount
            forkCount
          }
        }
        y2026: contributionsCollection(from: "2026-01-01T00:00:00Z", to: "2026-12-31T23:59:59Z") {
          contributionCalendar { totalContributions }
        }
        y2025: contributionsCollection(from: "2025-01-01T00:00:00Z", to: "2025-12-31T23:59:59Z") {
          contributionCalendar { totalContributions }
        }
        y2024: contributionsCollection(from: "2024-01-01T00:00:00Z", to: "2024-12-31T23:59:59Z") {
          contributionCalendar { totalContributions }
        }
        repositoriesContributedTo(first: 100, includeUserRepositories: true, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
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
      next: { revalidate: 60 } // Cache for 60 seconds for near real-time updates
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API responded with status ${response.status}`);
    }

    const data = await response.json();
    const user = data?.data?.user;

    if (!user) {
      throw new Error("Invalid response format from GitHub");
    }
    
    const y2026 = user.y2026?.contributionCalendar?.totalContributions || 0;
    const y2025 = user.y2025?.contributionCalendar?.totalContributions || 0;
    const y2024 = user.y2024?.contributionCalendar?.totalContributions || 0;
    const totalContributions = y2026 + y2025 + y2024;
    
    // Calculate total stars and forks
    let totalStars = 0;
    let totalForks = 0;
    if (user.repositories?.nodes) {
      user.repositories.nodes.forEach((repo: any) => {
        totalStars += repo.stargazerCount || 0;
        totalForks += repo.forkCount || 0;
      });
    }

    return NextResponse.json({
      publicRepos: user.repositories?.totalCount || 0,
      followers: user.followers?.totalCount || 0,
      following: user.following?.totalCount || 0,
      totalStars,
      totalForks,
      totalContributions,
      projectsBacked: user.repositoriesContributedTo?.totalCount || 0,
      joinedYear: new Date(user.createdAt).getFullYear()
    });

  } catch (error) {
    console.error("GitHub API Route Error:", error);
    return NextResponse.json({ error: "Failed to fetch secure data" }, { status: 500 });
  }
}
