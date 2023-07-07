import create, { SetState } from 'zustand';

export type ViewMode = 'scroll' | 'tab';

interface StoreState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  viewMode: 'scroll',
  setViewMode: (mode) => set(() => ({ viewMode: mode })),
}));
