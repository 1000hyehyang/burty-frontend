// 📄 store/useCommunityStore.ts
import { create } from "zustand";

type SortOption = "인기순" | "최신순";
type RegionOption = "전체" | "서울" | "부산" | "대전";
type AgeGroupOption = "전체" | "10대" | "20대" | "30대";
type JobOption = "전체" | "IT" | "디자인" | "마케팅";

interface CommunityFilterState {
  sort: SortOption;
  region: RegionOption;
  ageGroup: AgeGroupOption;
  job: JobOption;
  setSort: (v: SortOption) => void;
  setRegion: (v: RegionOption) => void;
  setAgeGroup: (v: AgeGroupOption) => void;
  setJob: (v: JobOption) => void;
  resetFilters: () => void;
}

export const useCommunityStore = create<CommunityFilterState>((set) => ({
  sort: "인기순",
  region: "전체",
  ageGroup: "전체",
  job: "전체",
  setSort: (v) => set({ sort: v }),
  setRegion: (v) => set({ region: v }),
  setAgeGroup: (v) => set({ ageGroup: v }),
  setJob: (v) => set({ job: v }),
  resetFilters: () =>
    set({
      sort: "인기순",
      region: "전체",
      ageGroup: "전체",
      job: "전체",
    }),
}));
