// 📁 utils/selectBookmarkedPolicies.ts
import { Policy } from "../types/policy";

export const selectBookmarkedPolicies = (
  all: Policy[],
  bookmarkedIds: number[]
): Policy[] => {
  return all.filter((p) => bookmarkedIds.includes(p.id));
};
