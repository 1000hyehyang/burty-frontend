// 📄 pages/SettlementPage.tsx
import AppContainer, { InnerContainer } from "../components/Layout/AppContainer";
import Header from "../components/Header/Header";
import NearbyCenterBanner from "../components/Settlement/NearbyCenterBanner";
import SettlementQuickAccess from "../components/Settlement/SettlementQuickAccess";
import ContentSection from "../components/Settlement/ContentSection";

const SettlementPage = () => {
  return (
    <AppContainer>
      <Header />
      <InnerContainer>
        <NearbyCenterBanner />
        <SettlementQuickAccess />
        <ContentSection />
      </InnerContainer>
    </AppContainer>
  );
};

export default SettlementPage;
