// 📁 types/policy.ts
export interface Policy {
  id: number;
  category: string;
  title: string;
  description: string;
  dateRange: string;
  dday: string;
  isClosed?: boolean;
  bookmarked?: boolean;
}

export interface PolicyDetail {
  id: number; // 내부 구분용 ID, 실제 API에는 없을 수 있음
  name: string; // plcyNm
  keyword: string; // plcyKywdNm
  description: string; // plcyExplnCn
  categorySmall: string; // lclsfNm
  categoryLarge: string; // mclsfNm
  supportContent: string; // plcySprtCn
  supervisingInstitution: string; // sprvsnInstCdNm
  operatingInstitution: string; // operInstCdNm
  applyMethod: string; // plcyAplyMthdCn
  selectionMethod: string; // srngMthdCn
  applyUrl: string; // aplyUrlAddr
  requiredDocuments: string; // sbmsnDcmntCn
  minAge: string; // sprtTrgtMinAge
  maxAge: string; // sprtTrgtMaxAge
  qualification: string; // addAplyQlfcCndCn
  applicationPeriod: string; // aplyYmd
  createdAt: string; // frstRegDt
  updatedAt: string; // lastMdfcnDt
}
