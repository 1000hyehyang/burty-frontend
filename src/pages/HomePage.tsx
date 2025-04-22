// 📄 pages/HomePage.tsx
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/Common/SectionTitle";
import PolicyList from "../components/Policy/PolicyList";
import CommunityPostList from "../components/Community/CommunityPostList";
import GreetingCard from "../components/GreetingCard/GreetingCard";
import AiReportBanner from "../components/AiReportBanner/AiReportBanner";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <GreetingCard username="김버티" subtitle="김버티님에게 딱 맞는 혜택이 도착했어요!" />
      <AiReportBanner />

      <SectionTitle
        title="청년 정책 혜택"
        showMoreButton
        onClickMore={() => navigate("/settlement/policy")}
      />
      <PolicyList mode="home" />

      <SectionTitle
        title="커뮤니티"
        showMoreButton
        onClickMore={() => navigate("/community")}
      />
      <CommunityPostList />
    </>
  );
};

export default HomePage;
