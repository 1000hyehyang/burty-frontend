// 📄 pages/SettlementPage.tsx

import AppContainer, {
    InnerContainer,
  } from "../components/Layout/AppContainer";
  import Header from "../components/Header/Header";
  import NearbyCenterBanner from "../components/Settlement/NearbyCenterBanner";
  import KeywordSearchCard from "../components/Settlement/KeywordSearchCard";
  import SimilarGroupCard from "../components/Settlement/SimilarGroupCard";
  import ContentSection from "../components/Settlement/ContentSection";
  
  const SettlementPage = () => {
    return (
      <AppContainer>
        <Header />
        <InnerContainer>
          <NearbyCenterBanner />
          <div style={{ display: "flex", gap: "12px" }}>
            <KeywordSearchCard />
            <SimilarGroupCard />
          </div>
          <ContentSection />
        </InnerContainer>
      </AppContainer>
    );
  };
  
  export default SettlementPage;
  