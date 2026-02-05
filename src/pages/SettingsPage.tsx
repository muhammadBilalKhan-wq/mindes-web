import { useUIStore } from '../store/uiStore';

export const SettingsPage = () => {
  const { isDark, toggleTheme } = useUIStore();

  return (
    <section className="px-4 py-6 sm:px-6">
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="mt-5 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-medium">Appearance</h2>
        <button
          type="button"
          onClick={toggleTheme}
          className="mt-3 rounded-full bg-neutral-900 px-4 py-2 text-sm text-white dark:bg-neutral-100 dark:text-neutral-900"
        >
          Switch to {isDark ? 'light' : 'dark'} mode
        </button>
      </div>
    </section>
  );
};
