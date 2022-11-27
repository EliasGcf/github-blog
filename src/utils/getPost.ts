import { Post } from '@utils/getPosts';

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

interface Assignee {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface ClosedBy {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee: Assignee;
  assignees: Assignee[];
  milestone: any;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason: any;
  body: string;
  closed_by: ClosedBy;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: any;
  state_reason: string;
}

export async function getPost(number: string | number): Promise<Post> {
  const url = new URL(
    `https://api.github.com/repos/${process.env.GITHUB_CMS_REPO}/issues/${number}`
  );

  const response = await fetch(url.toString(), {
    cache: 'force-cache',
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    next: {
      revalidate: 300, // 5 minutes
    },
  });

  console.log('Function getPosts: Loading posts from GitHub API');

  const data: Issue = await response.json();

  return {
    id: data.id,
    number: data.number,
    title: data.title,
    content: data.body,
    createdAt: data.created_at,
  };
}
