import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  label: string;
  icon: LucideIcon;
};

export const NavLinkItem = ({ to, label, icon: Icon }: Props) => (
  <NavLink to={to} className="group">
    {({ isActive }) => (
      <motion.div
        whileTap={{ scale: 0.98 }}
        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
          isActive
            ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
            : 'text-neutral-600 hover:bg-neutral-200/70 dark:text-neutral-300 dark:hover:bg-neutral-800'
        }`}
      >
        <Icon size={18} aria-hidden />
        <span className="font-medium">{label}</span>
      </motion.div>
    )}
  </NavLink>
);
