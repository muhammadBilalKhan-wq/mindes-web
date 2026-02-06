import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthField } from '../components/auth/AuthField';

export const SignUpPage = () => (
  <AuthLayout>
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.4em] text-neutral-500">Mindes</p>
      <h1 className="text-3xl font-semibold tracking-[0.01em] text-neutral-900">Create your account</h1>
      <p className="text-sm text-neutral-600">Join a calm space dedicated to knowledge and research.</p>
    </div>

    <form className="mt-8 space-y-5">
      <AuthField id="full-name" label="Full Name" placeholder="Enter your full name" />
      <AuthField id="email" label="Email" type="email" placeholder="name@domain.com" />
      <AuthField id="password" label="Password" type="password" placeholder="Create a password" />
      <AuthField id="confirm-password" label="Confirm Password" type="password" placeholder="Re-enter your password" />
      <button
        type="button"
        className="mt-2 h-11 w-full rounded-full bg-neutral-900 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Create Account
      </button>
    </form>

    <p className="mt-6 text-xs leading-relaxed text-neutral-500">
      By continuing, you agree to share only educational and meaningful content.
    </p>

    <p className="mt-6 text-center text-sm text-neutral-600">
      Already have an account?{' '}
      <Link to="/login" className="font-medium text-neutral-900">
        Sign In
      </Link>
    </p>
  </AuthLayout>
);
