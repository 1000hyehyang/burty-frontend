// 📄 pages/SettlementPage.tsx
import NearbyCenterBanner from "../components/Settlement/NearbyCenterBanner";
import SettlementQuickAccess from "../components/Settlement/SettlementQuickAccess";
import SectionTitle from "../components/Common/SectionTitle";
import ContentSection from "../components/Settlement/ContentSection";

const SettlementPage = () => {
  return (
    <>
      <NearbyCenterBanner />
      <SettlementQuickAccess />
      <SectionTitle title="청년 콘텐츠" />
      <ContentSection />
    </>
  );
};

export default SettlementPage;
