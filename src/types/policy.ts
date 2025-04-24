// 📁 types/policy.ts
export interface Policy {
  id: number;
  category: string;
  title: string;
  description: string;
  dateRange: string;
  dday: string;
  isClosed?: boolean;
}

export type PolicyCategory = "전체" | "일자리" | "주거" | "교육" | "복지";
