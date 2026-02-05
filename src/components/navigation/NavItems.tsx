import { Bell, Compass, Home, PenSquare, Settings, User } from 'lucide-react';

export const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/search', label: 'Search', icon: Compass },
  { to: '/create', label: 'Create', icon: PenSquare },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/profile/nora-learning', label: 'Profile', icon: User },
  { to: '/settings', label: 'Settings', icon: Settings },
];
