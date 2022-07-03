import create from "zustand";

export type Filter = {
  titleFilter: string;
  setTitleFilter: (titleFilter: string) => void;
  resetTitleFilter: () => void;

  generalFilter: string;
  setGeneralFilter: (generalFilter: string) => void;
  resetGeneralFilter: () => void;
};

const useFilter = create<Filter>((set) => ({
  titleFilter: "",
  setTitleFilter: (titleFilter) => set((state) => ({ ...state, titleFilter })),
  resetTitleFilter: () => set((state) => ({ ...state, titleFilter: "" })),
  generalFilter: "",

  setGeneralFilter: (generalFilter) =>
    set((state) => ({ ...state, generalFilter })),
  resetGeneralFilter: () => set((state) => ({ ...state, generalFilter: "" })),
}));

export default useFilter;
