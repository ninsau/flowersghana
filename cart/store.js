import create from "zustand";

export const stateStore = create((set) => ({
  done: false,
  setDone: (val) => set((state) => ({ done: val })),
}));


