import { ImagePlus } from 'lucide-react';
import { useMemo, useState } from 'react';

const MAX = 600;

export const CreatePage = () => {
  const [text, setText] = useState('');
  const left = useMemo(() => MAX - text.length, [text]);

  return (
    <section className="px-4 py-6 sm:px-6">
      <h1 className="text-xl font-semibold">Create Post</h1>
      <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">
        Mindes is for educational and knowledge-based content only.
      </p>
      <div className="mt-5 rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
        <textarea
          aria-label="Create post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX}
          placeholder="Share a framework, insight, or practical lesson..."
          className="min-h-44 w-full resize-none bg-transparent text-[15px] leading-6 outline-none"
        />
        <div className="mt-4 flex items-center justify-between">
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm dark:border-neutral-700">
            <ImagePlus size={16} /> Add image
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500">{left} chars</span>
            <button type="button" className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
              Publish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
