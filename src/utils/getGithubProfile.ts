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
  // const url = `https://api.github.com/users/${username}`;

  // const response = await fetch(url, { cache: 'force-cache' });

  // const data = await response.json();

  // console.log('Loading profile data from GitHub API');

  return {
    name: 'Elias Gabriel',
    login: 'EliasGcf',
    bio: 'Developer Instructor @Rocketseat・JS/TS Full Stack',
    avatarUrl: 'https://avatars.githubusercontent.com/u/50633599?v=4',
    followers: '952',
    company: '@Rocketseat',
    url: 'https://github.com/EliasGcf',
  };
}
