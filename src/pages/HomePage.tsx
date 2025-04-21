// 📄 pages/HomePage.tsx
import GreetingCard from "../components/GreetingCard/GreetingCard";
import AiReportBanner from "../components/AiReportBanner/AiReportBanner";
import PolicyList from "../components/Policy/PolicyList";
import CommunityPostList from "../components/Community/CommunityPostList";

const HomePage = () => (
  <>
    <GreetingCard username="김버티" subtitle="혜택이 도착했어요!" />
    <AiReportBanner />
    <PolicyList />
    <CommunityPostList />
  </>
);

export default HomePage;
