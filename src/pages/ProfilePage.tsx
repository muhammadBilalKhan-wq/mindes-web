import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostItem } from '../components/post/PostItem';
import { api } from '../services/api';
import { Post, Profile } from '../types';

const tabs = ['Posts', 'Replies', 'Saved'] as const;

export const ProfilePage = () => {
  const { username = '' } = useParams();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [tab, setTab] = useState<(typeof tabs)[number]>('Posts');

  useEffect(() => {
    const load = async () => {
      setProfile(await api.getProfile(username));
      setPosts(await api.getFeed(1));
    };
    void load();
  }, [username]);

  if (!profile) return null;

  return (
    <section>
      <header className="border-b border-neutral-200 px-4 py-6 dark:border-neutral-800 sm:px-6">
        <div className="flex items-start gap-4">
          <img src={profile.avatarUrl} alt={profile.name} className="h-16 w-16 rounded-full" />
          <div>
            <h1 className="text-xl font-semibold">{profile.name}</h1>
            <p className="text-sm text-neutral-500">@{profile.username}</p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">{profile.bio}</p>
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          {tabs.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-full px-3 py-1 text-sm ${
                tab === item ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' : 'bg-neutral-200 dark:bg-neutral-800'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </header>
      {tab === 'Posts' ? posts.map((post) => <PostItem key={post.id} post={post} />) : <p className="px-6 py-6 text-sm text-neutral-500">{tab} will populate from backend.</p>}
    </section>
  );
};
