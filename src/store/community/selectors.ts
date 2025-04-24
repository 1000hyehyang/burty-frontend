// 📄 store/community/selectors.ts
import { CommunityState } from "./useCommunityStore";

export const selectCommentsByPostId = (postId: number) => (state: CommunityState) =>
  state.comments.filter((comment) => comment.postId === postId);
