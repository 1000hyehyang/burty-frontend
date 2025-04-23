// 📁 store/useBookmarkStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkState {
  bookmarkedIds: number[];
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarkedIds: [],

      toggleBookmark: (id: number) => {
        const { bookmarkedIds } = get();
        const exists = bookmarkedIds.includes(id);
        set({
          bookmarkedIds: exists
            ? bookmarkedIds.filter((b) => b !== id)
            : [...bookmarkedIds, id],
        });
      },

      isBookmarked: (id: number) => get().bookmarkedIds.includes(id),
    }),
    {
      name: "bookmark-storage",
      partialize: (state) => ({ bookmarkedIds: state.bookmarkedIds }),
    }
  )
);
