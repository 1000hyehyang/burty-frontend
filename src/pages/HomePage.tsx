// 📄 pages/HomePage.tsx
import AppContainer, {
  InnerContainer,
} from "../components/Layout/AppContainer";
import Header from "../components/Header/Header";
import GreetingCard from "../components/GreetingCard/GreetingCard";
import AiReportBanner from "../components/AiReportBanner/AiReportBanner";
import PolicyList from "../components/Policy/PolicyList";
import CommunityPostList from "../components/Community/CommunityPostList";
import BottomNavigation from "../components/BottomNav/BottomNav";

const HomePage = () => {
  return (
    <AppContainer>
      <Header />
      <InnerContainer>
        <GreetingCard />
        <AiReportBanner />
        <PolicyList />
        <CommunityPostList />
      </InnerContainer>
      <BottomNavigation />
    </AppContainer>
  );
};

export default HomePage;
