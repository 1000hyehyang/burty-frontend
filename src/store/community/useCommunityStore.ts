// 📄 store/useCommunityStore.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  SortOption,
  RegionOption,
  AgeGroupOption,
  JobOption,
} from "../../types/community";

// 게시글/댓글 작성자 정보
export interface CommunityAuthor {
  nickname: string;
  profileImage?: string;
  ageGroup: string;
  region: string;
  job: string;
}

export interface CommunityPost {
  postId: number;
  author: CommunityAuthor;
  content: string;
  likes: number;
  views: number;
  createdAt: string;
}

export interface CommunityComment {
  commentId: number;
  postId: number;
  author: CommunityAuthor;
  content: string;
  likes: number;
  createdAt: string;
}

export interface CommunityState {
  // 필터 상태
  sort: SortOption;
  region: RegionOption;
  ageGroup: AgeGroupOption;
  job: JobOption;

  // 게시글/댓글 목록
  posts: CommunityPost[];
  comments: CommunityComment[];

  // 상태 관리용 메서드
  setSort: (v: SortOption) => void;
  setRegion: (v: RegionOption) => void;
  setAgeGroup: (v: AgeGroupOption) => void;
  setJob: (v: JobOption) => void;
  resetFilters: () => void;

  setPosts: (posts: CommunityPost[]) => void;
  setComments: (comments: CommunityComment[]) => void;
  addComment: (comment: CommunityComment) => void;
  likePost: (postId: number) => void;
  likeComment: (commentId: number) => void;

  // 더미 데이터
  setInitialData: (
    posts: CommunityPost[],
    comments: CommunityComment[]
  ) => void;
}

export const useCommunityStore = create<CommunityState>()(
  immer((set) => ({
    // 기본 필터
    sort: "인기순",
    region: "전체",
    ageGroup: "전체",
    job: "전체",

    posts: [],
    comments: [],

    // 필터 설정
    setSort: (v) => set((state) => void (state.sort = v)),
    setRegion: (v) => set((state) => void (state.region = v)),
    setAgeGroup: (v) => set((state) => void (state.ageGroup = v)),
    setJob: (v) => set((state) => void (state.job = v)),
    resetFilters: () =>
      set((state) => {
        state.sort = "인기순";
        state.region = "전체";
        state.ageGroup = "전체";
        state.job = "전체";
      }),

    // 데이터 세팅
    setPosts: (posts) => set((state) => void (state.posts = posts)),
    setComments: (comments) => set((state) => void (state.comments = comments)),

    // 더미 데이터
    setInitialData: (posts, comments) =>
      set((state) => {
        state.posts = posts;
        state.comments = comments;
      }),

    // 댓글 추가
    addComment: (comment) => set((state) => void state.comments.push(comment)),

    // 좋아요 처리
    likePost: (postId) =>
      set((state) => {
        const post = state.posts.find(
          (p: CommunityPost) => p.postId === postId
        );
        if (post) post.likes++;
      }),

    likeComment: (commentId) =>
      set((state) => {
        const comment = state.comments.find(
          (c: CommunityComment) => c.commentId === commentId
        );
        if (comment) comment.likes++;
      }),
  }))
);
