import { useState } from 'react';

export const PostComposerInline = () => {
  const [text, setText] = useState('');

  return (
    <div className="mt-3 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
      <textarea
        aria-label="Respond to post"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a thoughtful response..."
        className="min-h-20 w-full resize-none bg-transparent text-sm outline-none"
      />
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs text-neutral-500">Keep responses educational and evidence-based.</p>
        <button
          type="button"
          className="rounded-full bg-neutral-900 px-4 py-1.5 text-xs text-white dark:bg-neutral-100 dark:text-neutral-900"
        >
          Reply
        </button>
      </div>
    </div>
  );
};
