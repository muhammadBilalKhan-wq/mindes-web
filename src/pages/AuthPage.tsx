import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  mode: 'login' | 'register';
};

export const AuthPage = ({ mode }: Props) => {
  const isLogin = mode === 'login';

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-100 px-4 py-8 dark:bg-neutral-950 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-14 h-56 w-56 rounded-full bg-white/70 blur-3xl dark:bg-white/10" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-neutral-200/80 blur-3xl dark:bg-white/10" />
      </div>

      <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-xl border border-white/50 bg-white/70 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/60 sm:grid-cols-2">
        <aside className="hidden border-r border-neutral-200/70 p-8 sm:block dark:border-neutral-800/70">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Mindes</p>
          <h1 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
            Learn deeply.
            <br />
            Share clearly.
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            A focused network for educational, evidence-driven conversations and long-form thinking.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
            {['Knowledge-first discussions', 'No entertainment noise', 'Designed for reading comfort'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-neutral-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="p-5 sm:p-8">
          <nav aria-label="Auth navigation" className="mb-6 grid grid-cols-2 rounded-xl bg-neutral-200/70 p-1 text-sm dark:bg-neutral-800/70">
            <Link
              to="/login"
              className={`rounded-[10px] px-4 py-2 text-center font-medium transition ${
                isLogin ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-neutral-100' : 'text-neutral-500'
              }`}
            >
              Log In
            </Link>
            <Link
              to="/register"
              className={`rounded-[10px] px-4 py-2 text-center font-medium transition ${
                !isLogin ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-neutral-100' : 'text-neutral-500'
              }`}
            >
              Sign Up
            </Link>
          </nav>

          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">Use your email to continue to Mindes.</p>

          <form className="mt-6 space-y-3" aria-label={isLogin ? 'Login form' : 'Sign up form'}>
            {!isLogin && (
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500">Full name</span>
                <input
                  aria-label="Full name"
                  placeholder="Nora El-Sayed"
                  className="w-full rounded-[10px] border border-neutral-300/80 bg-white/80 px-3.5 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-100"
                />
              </label>
            )}

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500">Email</span>
              <input
                type="email"
                aria-label="Email"
                placeholder="you@domain.com"
                className="w-full rounded-[10px] border border-neutral-300/80 bg-white/80 px-3.5 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-100"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500">Password</span>
              <input
                type="password"
                aria-label="Password"
                placeholder="••••••••"
                className="w-full rounded-[10px] border border-neutral-300/80 bg-white/80 px-3.5 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-100"
              />
            </label>

            <button
              type="button"
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {isLogin ? 'Continue' : 'Create account'}
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-neutral-500">
            {isLogin ? 'New to Mindes?' : 'Already have an account?'}{' '}
            <Link to={isLogin ? '/register' : '/login'} className="font-medium text-neutral-900 underline underline-offset-2 dark:text-neutral-100">
              {isLogin ? 'Sign up' : 'Log in'}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
