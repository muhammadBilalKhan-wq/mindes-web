import { BookOpenText, Ellipsis, FileText, MessagesSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const menuItems = [
  { label: 'Articles', icon: FileText },
  { label: 'Research Paper', icon: BookOpenText },
  { label: 'Debate Room', icon: MessagesSquare },
] as const;

export const MoreMenu = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="More options"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
      >
        <Ellipsis size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            {menuItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <Icon size={16} className="text-neutral-500" />
                <span>{label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
