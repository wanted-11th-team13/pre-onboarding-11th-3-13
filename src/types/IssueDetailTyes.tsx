export interface IssueDetailUserOriginProps {
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

export interface IssueDetailLabelOriginProps {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
}

export interface IssueDetailReactionsOriginProps {
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

export interface IssueDetailOriginProps {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  node_id: string;
  title: string;
  id: number;
  number: number;
  state: string;
  locked: boolean;
  assignee: string | null;
  assignees: string | undefined[];
  milestone: string | null;
  comments: number;
  created_at: string | null;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  body: string;
  closed_by: string | null;
  timeline_url: string;
  performed_via_github_app: string | null;
  state_reason: string | null;
  user: IssueDetailUserOriginProps;
  labels: IssueDetailLabelOriginProps[];
  reactions: IssueDetailReactionsOriginProps[];
}

export interface IssueDetailProps {
  id: number;
  number: number;
  title: string;
  comments: number;
  createdAt: string | null;
  body: string;
  userId: number;
  author: string;
  profileUrl: string;
  profileLink: string;
}
