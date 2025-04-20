// 📄 pages/HomePage.tsx
import Header from "../components/Header/Header";
import GreetingCard from "../components/GreetingCard/GreetingCard";
import AiReportBanner from "../components/AiReportBanner/AiReportBanner";
import PolicyList from "../components/Policy/PolicyList";
import HotBoardList from "../components/HotBoard/HotBoardList";

const HomePage = () => {
  return (
    <>
      <Header />
      <GreetingCard />
      <AiReportBanner />
      <PolicyList />
      <HotBoardList />
    </>
  );
};

export default HomePage;
