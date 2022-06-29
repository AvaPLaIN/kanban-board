import create from "zustand";

type Filter = {
  query: string;
  setQuery: (query: string) => void;
  resetQuery: () => void;
};

const useFilter = create<Filter>((set) => ({
  query: "",
  setQuery: (query) => set((state) => ({ ...state, query })),
  resetQuery: () => set((state) => ({ ...state, query: "" })),
}));

export default useFilter;
