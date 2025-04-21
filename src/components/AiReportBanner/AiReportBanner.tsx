// 📄 components/AiReportBanner/AiReportBanner.tsx
import BaseBanner from "../Common/BaseBanner/BaseBanner";
import ReportIcon from "../../assets/images/ai-report-icon.svg";

const AiReportBanner = () => {
  return (
    <BaseBanner
      iconSrc={ReportIcon}
      iconAlt="AI 리포트 아이콘"
      title={<>어디에서 버티는 게 <span>진짜 이득</span>일까?</>}
      subtitle="생존 비용을 기반으로 직무와 지역을 재설계해드릴게요."
      buttonText="AI 추천 정착지 리포트 생성하기"
    />
  );
};

export default AiReportBanner;
