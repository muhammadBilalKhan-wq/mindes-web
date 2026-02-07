import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12 text-neutral-900">
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,15,15,0.04)] sm:p-10"
    >
      {children}
    </motion.section>
  </main>
);
