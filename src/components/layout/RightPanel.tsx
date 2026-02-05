export const RightPanel = () => (
  <aside className="sticky top-0 hidden h-screen w-[320px] border-l border-neutral-200 px-6 py-8 dark:border-neutral-800 xl:block">
    <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Learning prompts</h2>
    <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
      <li className="rounded-xl bg-neutral-100 p-3 dark:bg-neutral-900">What concept did you relearn this week?</li>
      <li className="rounded-xl bg-neutral-100 p-3 dark:bg-neutral-900">Share one research paper summary in 5 lines.</li>
      <li className="rounded-xl bg-neutral-100 p-3 dark:bg-neutral-900">Which framework improved your team decisions?</li>
    </ul>
  </aside>
);
