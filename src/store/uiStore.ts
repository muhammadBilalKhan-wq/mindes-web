import { create } from 'zustand';

type UIState = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
