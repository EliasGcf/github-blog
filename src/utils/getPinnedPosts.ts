export interface AssigneesEntityOrUserOrAssignee {
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
export interface LabelsEntity {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}
export interface Reactions {
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
export interface Issue {
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
  user: AssigneesEntityOrUserOrAssignee;
  labels?: LabelsEntity[] | null;
  state: string;
  locked: boolean;
  assignee: AssigneesEntityOrUserOrAssignee;
  assignees?: AssigneesEntityOrUserOrAssignee[] | null;
  milestone?: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason?: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: null;
  state_reason: string;
}

export async function getPinnedPosts() {
  const url = new URL(
    `https://api.github.com/repos/${process.env.GITHUB_CMS_REPO}/issues`
  );

  url.searchParams.set('state', 'closed');
  url.searchParams.set('labels', 'publish,pin');
  url.searchParams.set('per_page', '6');
  url.searchParams.set('sort', 'created');
  url.searchParams.set('direction', 'desc');

  const response = await fetch(url.toString(), {
    cache: 'force-cache',
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
  });

  const data: Issue[] = await response.json();

  return data.map((issue) => ({
    id: issue.id,
    number: issue.number,
    title: issue.title,
    content: issue.body,
    createdAt: issue.created_at,
  }));
}
