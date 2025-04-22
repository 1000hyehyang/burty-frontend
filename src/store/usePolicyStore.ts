// 📄 store/usePolicyStore.ts
import { create } from "zustand";

export type PolicyCategory = "전체" | "일자리" | "주거" | "교육" | "복지";

interface PolicyStore {
  selectedCategory: PolicyCategory;
  setCategory: (category: PolicyCategory) => void;
}

export const usePolicyStore = create<PolicyStore>((set) => ({
  selectedCategory: "전체",
  setCategory: (category) => set({ selectedCategory: category }),
}));
