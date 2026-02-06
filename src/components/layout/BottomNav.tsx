import { NavLink } from 'react-router-dom';
import { navItems } from '../navigation/NavItems';

export const BottomNav = () => (
  <nav
    aria-label="Mobile navigation"
    className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-neutral-50/95 px-4 py-2 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 lg:hidden"
  >
    <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
      {navItems.slice(0, 5).map(({ to, icon: Icon, label }) => (
        <NavLink key={to} to={to} className="flex flex-col items-center rounded-lg p-2 text-[11px]">
          {({ isActive }) => (
            <>
              <Icon size={18} className={isActive ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'} />
              <span className={isActive ? 'font-semibold' : 'text-neutral-500'}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  </nav>
);
