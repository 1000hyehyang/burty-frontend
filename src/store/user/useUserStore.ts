// 📄 store/user/useUserStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile } from "../../types/user";

interface UserStore extends UserProfile {
  setProfileImage: (url: string) => void;
  setNickname: (nickname: string) => void;
  setRegion: (region: string) => void;
  setJob: (job: string) => void;
  setBirthDate: (date: Date | null) => void;
  setAll: (profile: UserProfile) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "user-profile-storage",
      partialize: (state) => ({
        profileImage: state.profileImage,
        nickname: state.nickname,
        region: state.region,
        job: state.job,
        birthDate: state.birthDate,
      }),
    }
  )
);
