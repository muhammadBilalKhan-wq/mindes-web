import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthField } from '../components/auth/AuthField';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/app');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleContinue();
  };

  return (
    <AuthLayout>
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-neutral-500">Mindes</p>
        <h1 className="text-3xl font-semibold tracking-[0.01em] text-neutral-900">Welcome back</h1>
        <p className="text-sm text-neutral-600">Sign in to continue thoughtful discussions.</p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <AuthField id="login-email" label="Email" type="email" placeholder="name@domain.com" />
        <AuthField id="login-password" label="Password" type="password" placeholder="Enter your password" />
        <button
          type="submit"
          className="mt-2 h-11 w-full rounded-full bg-neutral-900 text-sm font-medium text-white transition hover:bg-neutral-800"
          onClick={handleContinue}
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-600">
        Create a new account{' '}
        <Link to="/signup" className="font-medium text-neutral-900">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};
