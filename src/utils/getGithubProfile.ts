type GetGitHubProfileResponse = Promise<{
  name: string;
  login: string;
  bio: string;
  avatarUrl: string;
  followers: string;
  company: string;
  url: string;
}>;

export async function getGitHubProfile(): GetGitHubProfileResponse {
  const url = `https://api.github.com/user`;

  const response = await fetch(url, {
    cache: 'force-cache',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: {
      revalidate: 21600, // 6 hours
    },
  });

  const data = await response.json();

  console.log('Function getGitHubProfile: Loading profile from GitHub API');

  return {
    name: data.name,
    login: data.login,
    bio: data.bio,
    avatarUrl: data.avatar_url,
    followers: new Intl.NumberFormat().format(data.followers),
    company: data.company,
    url: data.html_url,
  };
}
