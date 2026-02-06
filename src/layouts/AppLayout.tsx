import { Outlet } from 'react-router-dom';
import { BottomNav } from '../components/layout/BottomNav';
import { LeftSidebar } from '../components/layout/LeftSidebar';
import { RightPanel } from '../components/layout/RightPanel';

export const AppLayout = () => (
  <div className="mx-auto flex min-h-screen max-w-[1400px]">
    <LeftSidebar />
    <main className="mx-auto w-full max-w-feed border-x border-neutral-200 pb-16 dark:border-neutral-800 lg:pb-0">
      <Outlet />
    </main>
    <RightPanel />
    <BottomNav />
  </div>
);
