// 📁 store/useUserStore.ts
import { create } from "zustand";

export interface UserProfile {
  profileImage: string;
  nickname: string;
  region: string;
  job: string;
  birthDate: Date | null;
}

interface UserStore extends UserProfile {
  setProfileImage: (url: string) => void;
  setNickname: (nickname: string) => void;
  setRegion: (region: string) => void;
  setJob: (job: string) => void;
  setBirthDate: (date: Date | null) => void;
  setAll: (profile: UserProfile) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profileImage: "/default-profile.png",
  nickname: "김버티",
  region: "서울특별시 관악구",
  job: "개발자",
  birthDate: new Date("1992-11-20"),

  setProfileImage: (url) => set({ profileImage: url }),
  setNickname: (nickname) => set({ nickname }),
  setRegion: (region) => set({ region }),
  setJob: (job) => set({ job }),
  setBirthDate: (date) => set({ birthDate: date }),

  setAll: (profile) => set({ ...profile }),
}));
