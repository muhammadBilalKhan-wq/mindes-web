import { useState } from 'react';
import { AnimatePresence, PanInfo, motion } from 'framer-motion';
import { BookOpen, Brain, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Knowledge First',
    description: 'Only educational and valuable content.',
    icon: BookOpen,
  },
  {
    title: 'No Entertainment',
    description: 'No memes, trends, or distractions.',
    icon: Ban,
  },
  {
    title: 'Think Deeply',
    description: 'Designed for focus and learning.',
    icon: Brain,
  },
];

export const OnboardingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];
  const Icon = activeSlide.icon;

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -80) {
      setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }
    if (info.offset.x > 80) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12 text-neutral-900">
      <section className="flex w-full max-w-lg flex-col items-center rounded-[32px] border border-neutral-200 bg-white px-6 py-10 text-center shadow-[0_12px_30px_rgba(15,15,15,0.04)] sm:px-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 text-lg font-semibold tracking-[0.2em] text-neutral-900">
            M
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-neutral-500">Mindes</span>
        </div>

        <p className="mt-6 max-w-sm text-lg font-medium leading-relaxed text-neutral-700">
          A social network for knowledge, research, and meaningful ideas.
        </p>

        <div className="mt-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 text-neutral-700">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-[0.01em]">{activeSlide.title}</h2>
                <p className="text-sm text-neutral-600">{activeSlide.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-neutral-900' : 'w-2 bg-neutral-300'}`}
            />
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col gap-3">
          <Link
            to="/signup"
            className="flex h-11 w-full items-center justify-center rounded-full bg-neutral-900 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Sign Up
          </Link>
          <Link to="/login" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
            Sign In
          </Link>
        </div>
      </section>
    </main>
  );
};
