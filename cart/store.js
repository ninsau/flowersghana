import create from "zustand";

export const stateStore = create((set) => ({
  done: false,
  setDone: (val) => set((state) => ({ done: val })),
}));

export const removeStore = create((set) => ({
  done: '',
  setDone: (val) => set((state) => ({ done: val })),
}));

export const cartIconStore = create((set) => ({
  open: false,
  setOpen: (val) => set((state) => ({ open: val })),
}));



