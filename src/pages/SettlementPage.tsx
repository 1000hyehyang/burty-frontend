// 📄 pages/SettlementPage.tsx
import NearbyCenterBanner from "../components/Settlement/NearbyCenterBanner";
import SettlementQuickAccess from "../components/Settlement/SettlementQuickAccess";
import ContentSection from "../components/Settlement/ContentSection";

const SettlementPage = () => {
  return (
    <>
      <NearbyCenterBanner />
      <SettlementQuickAccess />
      <ContentSection />
    </>
  );
};

export default SettlementPage;
