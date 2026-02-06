import { NotificationItem, Post, Profile } from '../types';

const mockPosts: Post[] = [
  {
    id: '1',
    author: { name: 'Dr. Maya Chen', username: 'maya-chen', avatarUrl: 'https://i.pravatar.cc/80?img=12' },
    content:
      'When designing a learning roadmap, sequence fundamentals by dependency, not popularity. A concept map can reveal hidden prerequisite gaps in under 20 minutes.',
    createdAt: '2h',
    insightfulCount: 84,
    responseCount: 12,
    repostCount: 9,
    saved: false,
  },
  {
    id: '2',
    author: { name: 'Arjun Rao', username: 'arjun-systems', avatarUrl: 'https://i.pravatar.cc/80?img=22' },
    content:
      'A practical prompt review checklist for teams:\n1) Is the goal measurable?\n2) Are constraints explicit?\n3) Is expected output format defined?\n4) What should be excluded?',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    createdAt: '4h',
    insightfulCount: 56,
    responseCount: 21,
    repostCount: 14,
    saved: true,
  },
  {
    id: '3',
    author: { name: 'Lena Ortiz', username: 'lena-data', avatarUrl: 'https://i.pravatar.cc/80?img=32' },
    content:
      'If your dashboard has 20 KPIs, nobody has a KPI. Pick one lead metric for each workflow and tie decisions to thresholds.',
    createdAt: '7h',
    insightfulCount: 132,
    responseCount: 34,
    repostCount: 25,
    saved: false,
  },
];

const mockProfile: Profile = {
  name: 'Nora El-Sayed',
  username: 'nora-learning',
  bio: 'Learning experience designer. Sharing frameworks, study systems, and research-backed teaching methods.',
  avatarUrl: 'https://i.pravatar.cc/120?img=5',
};

const mockNotifications: NotificationItem[] = [
  { id: 'n1', type: 'response', actor: 'maya-chen', message: 'responded to your post on cognitive load.', time: '18m' },
  { id: 'n2', type: 'insightful', actor: 'sam-product', message: 'marked your framework as insightful.', time: '1h' },
  { id: 'n3', type: 'repost', actor: 'lena-data', message: 'reposted your note on spaced repetition.', time: '3h' },
];

export const api = {
  async getFeed(page = 1): Promise<Post[]> {
    return Promise.resolve(
      mockPosts.map((post) => ({ ...post, id: `${post.id}-${page}` })),
    );
  },
  async getProfile(_username: string): Promise<Profile> {
    return Promise.resolve(mockProfile);
  },
  async getNotifications(): Promise<NotificationItem[]> {
    return Promise.resolve(mockNotifications);
  },
  async search(query: string): Promise<Post[]> {
    return Promise.resolve(
      mockPosts.filter((post) =>
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.author.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  },
};
