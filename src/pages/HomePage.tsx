import { PostItem } from '../components/post/PostItem';
import { MoreMenu } from '../components/ui/MoreMenu';
import { useInfiniteFeed } from '../hooks/useInfiniteFeed';

export const HomePage = () => {
  const { posts, loading, setSentinel } = useInfiniteFeed();

  return (
    <section>
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-neutral-50/90 px-4 py-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90 sm:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Home</h1>
          <MoreMenu />
        </div>
      </header>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <div ref={setSentinel} className="h-16">
        {loading && <p className="px-6 py-4 text-sm text-neutral-500">Loading more thoughtful posts...</p>}
      </div>
    </section>
  );
};
