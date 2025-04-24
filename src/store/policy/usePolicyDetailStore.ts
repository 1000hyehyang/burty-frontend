// 📁 store/usePolicyDetailStore.ts
import { create } from "zustand";
import { PolicyDetail } from "../../types/policy";

interface PolicyDetailStore {
  policy: PolicyDetail | null;
  setPolicy: (data: PolicyDetail) => void;
  clearPolicy: () => void;
}

export const usePolicyDetailStore = create<PolicyDetailStore>((set) => ({
  policy: null,
  setPolicy: (data) => set({ policy: data }),
  clearPolicy: () => set({ policy: null }),
}));
