import create, { SetState } from "zustand";

export type ViewMode = "all" | "tab";

interface StoreState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  viewMode: "all",
  setViewMode: (mode) => set(() => ({ viewMode: mode })),
}));

export interface ProjectStoreState {
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}

export const useProjectStore = create<ProjectStoreState>(
  (set: SetState<ProjectStoreState>) => ({
    selectedProject: "",
    setSelectedProject: (project) => set(() => ({ selectedProject: project })),
  })
);
