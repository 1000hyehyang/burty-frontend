// 📄 store/useYouthContentDetailStore.ts
import { create } from "zustand";
import { YouthContent } from "../../types/youthContent";
import { dummyYouthContents } from "../../mock/youthContents";

interface YouthContentDetailStore {
  content: YouthContent | null;
  fetchContent: (id: number) => void;
}

export const useYouthContentDetailStore = create<YouthContentDetailStore>((set) => ({
  content: null,
  fetchContent: (id) => {
    const found = dummyYouthContents.find((c) => c.id === id) || null;
    set({ content: found });
  },
}));