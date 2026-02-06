import { Link } from 'react-router-dom';

type Props = {
  mode: 'login' | 'register';
};

export const AuthPage = ({ mode }: Props) => {
  const isLogin = mode === 'login';

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h1 className="text-2xl font-semibold">{isLogin ? 'Sign in to Mindes' : 'Create your Mindes account'}</h1>
        <p className="mt-2 text-sm text-neutral-500">Knowledge-first discussions for serious learners.</p>
        <form className="mt-6 space-y-3">
          {!isLogin && <input aria-label="Name" placeholder="Full name" className="w-full rounded-xl border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-600 dark:border-neutral-700" />}
          <input aria-label="Email" type="email" placeholder="Email" className="w-full rounded-xl border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-600 dark:border-neutral-700" />
          <input aria-label="Password" type="password" placeholder="Password" className="w-full rounded-xl border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-600 dark:border-neutral-700" />
          <button type="button" className="w-full rounded-full bg-neutral-900 py-2 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
            {isLogin ? 'Sign in' : 'Create account'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-neutral-500">
          {isLogin ? 'New here?' : 'Already have an account?'}{' '}
          <Link className="font-medium text-neutral-900 underline dark:text-neutral-100" to={isLogin ? '/register' : '/login'}>
            {isLogin ? 'Create account' : 'Sign in'}
          </Link>
        </p>
      </section>
    </main>
  );
};
