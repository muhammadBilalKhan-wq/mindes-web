import { Bookmark, Heart, MessageCircle, Repeat2 } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  insightfulCount: number;
  responseCount: number;
  repostCount: number;
  saved: boolean;
  onRespond: () => void;
};

export const PostActions = ({ insightfulCount, responseCount, repostCount, saved, onRespond }: Props) => (
  <div className="mt-3 flex items-center gap-5 text-neutral-500 dark:text-neutral-400">
    <button type="button" className="inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-100">
      <Heart size={18} /> {insightfulCount}
    </button>
    <motion.button whileTap={{ scale: 0.98 }} type="button" onClick={onRespond} className="inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-100">
      <MessageCircle size={18} /> {responseCount}
    </motion.button>
    <button type="button" className="inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-100">
      <Repeat2 size={18} /> {repostCount}
    </button>
    <button type="button" className="inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-100">
      <Bookmark size={18} className={saved ? 'fill-current' : ''} />
    </button>
  </div>
);
