import { Moon, Sun } from 'lucide-react';
import { NavLinkItem } from '../navigation/NavLinkItem';
import { navItems } from '../navigation/NavItems';
import { useUIStore } from '../../store/uiStore';
import { MoreMenu } from '../ui/MoreMenu';

export const LeftSidebar = () => {
  const { isDark, toggleTheme } = useUIStore();

  return (
    <aside className="sticky top-0 hidden h-screen w-[280px] border-r border-neutral-200 px-6 py-8 dark:border-neutral-800 lg:block">
      <div className="mb-10 text-2xl font-semibold tracking-tight">Mindes</div>
      <nav aria-label="Primary" className="space-y-2">
        {navItems.map((item) => (
          <NavLinkItem key={item.to} {...item} />
        ))}
      </nav>
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-700"
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
        {isDark ? 'Light mode' : 'Dark mode'}
      </button>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-200 px-3 py-2 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-200">
        <span className="font-medium">More</span>
        <MoreMenu />
      </div>
    </aside>
  );
};
