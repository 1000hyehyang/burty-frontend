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
  