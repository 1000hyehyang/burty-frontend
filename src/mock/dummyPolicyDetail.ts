import { PolicyDetail } from "../types/policy";

export const dummyPolicyDetail: PolicyDetail = {
  id: 0,
  name: "경기청년 해외진출(일본) 사업",
  keyword: "청년, 해외, 일본",
  description: "도내 청년들의 글로벌 역량강화 및 해외진출 지원",
  categorySmall: "일자리",
  categoryLarge: "청년정책",
  supportContent: `○ 일본 취업 노하우와 현지 네트워크로 전문 강사진의 취업특강 및 1:1 맞춤형 이력서 첨삭과 면접 컨설팅 제공
○ 일본 현업자 정보 제공 및 우수기업 현장실습 연계 등 해외취업역량 강화 지원`,
  supervisingInstitution: "재단법인 경기도일자리재단",
  operatingInstitution: "재단법인 경기도일자리재단",
  applyMethod: "지원자 별도 평가 과정 없이 자격조건 충족시 선정",
  selectionMethod: "2025. 4. 22.(화)까지 개별 안내",
  applyUrl: "https://apply.example.com",
  requiredDocuments: `○ 신청서
○ 자기소개서
○ 건강진단서 등`,
  minAge: "19",
  maxAge: "39",
  qualification: "도내 거주 청년 중 취업 비자를 소지한 자",
  applicationPeriod: "2025.04.01 ~ 2025.04.30",
  createdAt: "2025-03-01",
  updatedAt: "2025-03-30",
};
