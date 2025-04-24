import { create } from "zustand";

export type MyPageTab = "찜 목록" | "히스토리" | "커뮤니티";

interface MyPageStore {
  selectedTab: MyPageTab;
  setTab: (tab: MyPageTab) => void;
}

export const useMyPageStore = create<MyPageStore>((set) => ({
  selectedTab: "찜 목록",
  setTab: (tab) => set({ selectedTab: tab }),
}));
