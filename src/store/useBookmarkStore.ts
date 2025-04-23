// 📁 src/store/useBookmarkStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkState {
  bookmarkedIds: number[];
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
  initialize: (ids: number[]) => void;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarkedIds: [],

      toggleBookmark: (id: number) => {
        const { bookmarkedIds } = get();
        const isAlreadyBookmarked = bookmarkedIds.includes(id);

        set({
          bookmarkedIds: isAlreadyBookmarked
            ? bookmarkedIds.filter((bookmarkedId) => bookmarkedId !== id)
            : [...bookmarkedIds, id],
        });
      },

      isBookmarked: (id: number) => get().bookmarkedIds.includes(id),

      initialize: (ids: number[]) => {
        set({ bookmarkedIds: ids });
      },
    }),
    {
      name: "bookmark-storage", // 🔐 localStorage key
      partialize: (state) => ({ bookmarkedIds: state.bookmarkedIds }), // 저장할 부분만
    }
  )
);
