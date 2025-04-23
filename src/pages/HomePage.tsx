// 📄 pages/HomePage.tsx
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/Common/SectionTitle";
import PolicyList from "../components/Policy/PolicyList";
import CommunityPostList from "../components/Community/CommunityPostList";
import GreetingCard from "../components/GreetingCard/GreetingCard";
import AiReportBanner from "../components/AiReportBanner/AiReportBanner";
import { dummyPolicies } from "../mock/policies";

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
      <PolicyList policies={dummyPolicies} showTabs limit={2} />

      <SectionTitle
        title="HOT 게시글"
        showMoreButton
        onClickMore={() => navigate("/community")}
      />
      <CommunityPostList mode="home" />
    </>
  );
};

export default HomePage;
