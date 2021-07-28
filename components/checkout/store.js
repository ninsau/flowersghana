import create from "zustand";

export const stepsStore = create((set) => ({
  steps: ["Recipient details", "Sender details", "Review your order"],
}));

export const activeStepStore = create((set) => ({
  activeStep: 0,
  setActiveStep: (val) => set((state) => ({ activeStep: val })),
}));

export const recipientStore = create((set) => ({
  recipient: {
    calender: "",
    firstname: "",
    lastname: "",
    region: "",
    phone: "",
    location: "",
    location2: "",
    city: "",
    fee: 0,
  },
  setRecipient: (val) => set((state) => ({ recipient: val })),
}));

export const senderStore = create((set) => ({
  sender: {
    email: "",
    sfirstname: "",
    sphone: "",
    note: "",
    instructions: "",
  },
  setSender: (val) => set((state) => ({ sender: val })),
}));
