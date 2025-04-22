// 📄 src/mock/policies.ts

export interface Policy {
    category: string;
    title: string;
    description: string;
    dateRange: string;
    dday: string;
    isClosed?: boolean;
  }
  
  export const dummyPolicies: Policy[] = [
    {
      category: "취업",
      title: "청년 전입 지원금",
      description: "미취업 청년의 구직활동 지원을 위한 지원금 사업입니다.",
      dateRange: "2025.04.17 ~ 2025.04.30",
      dday: "D-7",
    },
    {
      category: "창업",
      title: "청년 창업 지원금",
      description: "청년 창업가의 창업 활동을 지원하는 사업입니다.",
      dateRange: "2024.04.17 ~ 2024.04.30",
      dday: "마감",
      isClosed: true,
    },
  ];
  