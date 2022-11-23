type GetGitHubProfileResponse = Promise<{
  name: string;
  login: string;
  bio: string;
  avatarUrl: string;
  followers: string;
  company: string;
  url: string;
}>;

export async function getGitHubProfile(username: string): GetGitHubProfileResponse {
  const url = `https://api.github.com/users/${username}`;

  const response = await fetch(url, { cache: 'force-cache' });

  const data = await response.json();

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
