// 📄 mock/policies.ts
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
    category: "일자리",
    title: "청년 전입 지원금",
    description: "미취업 청년의 구직활동 지원을 위한 지원금 사업입니다.",
    dateRange: "2025.04.17 ~ 2025.04.30",
    dday: "D-7",
  },
  {
    category: "주거",
    title: "청년 월세 지원",
    description: "1인 가구 청년을 위한 월세 지원 제도입니다.",
    dateRange: "2025.05.01 ~ 2025.05.20",
    dday: "D-15",
  },
  {
    category: "교육",
    title: "IT 직무 전환 교육",
    description: "비전공 청년 대상 무료 IT 교육 프로그램입니다.",
    dateRange: "2025.04.01 ~ 2025.06.01",
    dday: "D-30",
  },
  {
    category: "복지",
    title: "청년 마음건강 바우처",
    description: "정신건강 클리닉 상담비를 지원합니다.",
    dateRange: "2025.04.01 ~ 2025.05.31",
    dday: "D-20",
  },
  {
    category: "일자리",
    title: "청년 창업 지원금",
    description: "청년 창업가를 위한 초기 자금 지원 제도입니다.",
    dateRange: "2024.01.01 ~ 2024.12.31",
    dday: "마감",
    isClosed: true,
  },
];
