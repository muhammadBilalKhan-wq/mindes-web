import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PostItem } from '../components/post/PostItem';
import { api } from '../services/api';
import { Post } from '../types';

const tabs = ['Posts', 'People', 'Topics'] as const;

export const SearchPage = () => {
  const [query, setQuery] = useState('learning systems');
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Posts');
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await api.search(query);
      setResults(data);
    };
    void load();
  }, [query]);

  return (
    <section>
      <div className="sticky top-0 z-20 border-b border-neutral-200 bg-neutral-50/95 px-4 py-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 sm:px-6">
        <label className="flex items-center gap-2 rounded-xl bg-neutral-200/80 px-3 py-2 dark:bg-neutral-800/80">
          <Search size={16} className="text-neutral-500" />
          <input
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
        <div className="mt-3 flex gap-2">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1 text-sm ${
                activeTab === tab ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' : 'bg-neutral-200 dark:bg-neutral-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {activeTab === 'Posts' ? (
        results.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <div className="px-6 py-8 text-sm text-neutral-500">{activeTab} results available after backend integration.</div>
      )}
    </section>
  );
};
