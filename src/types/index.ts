export type Post = {
  id: string;
  author: {
    name: string;
    username: string;
    avatarUrl: string;
  };
  content: string;
  imageUrl?: string;
  createdAt: string;
  insightfulCount: number;
  responseCount: number;
  repostCount: number;
  saved: boolean;
};

export type Profile = {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
};

export type NotificationItem = {
  id: string;
  type: 'response' | 'insightful' | 'repost';
  actor: string;
  message: string;
  time: string;
};
