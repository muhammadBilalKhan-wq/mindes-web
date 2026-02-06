import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import { PostActions } from './PostActions';
import { PostComposerInline } from './PostComposerInline';

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="border-b border-neutral-200 px-4 py-4 dark:border-neutral-800 sm:px-6"
    >
      <div className="flex gap-3">
        <Link to={`/profile/${post.author.username}`}>
          <img className="h-10 w-10 rounded-full" src={post.author.avatarUrl} alt={post.author.name} />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-sm">
            <Link to={`/profile/${post.author.username}`} className="font-semibold hover:underline">
              {post.author.name}
            </Link>
            <span className="text-neutral-500">@{post.author.username}</span>
            <span className="text-neutral-400">· {post.createdAt}</span>
          </div>
          <p className="mt-2 whitespace-pre-line text-[15px] leading-6 text-neutral-800 dark:text-neutral-100">{post.content}</p>
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post media" className="mt-3 max-h-96 w-full rounded-xl object-cover" />
          )}
          <PostActions
            insightfulCount={post.insightfulCount}
            responseCount={post.responseCount}
            repostCount={post.repostCount}
            saved={post.saved}
            onRespond={() => setShowReply((prev) => !prev)}
          />
          {showReply && <PostComposerInline />}
        </div>
      </div>
    </motion.article>
  );
};
