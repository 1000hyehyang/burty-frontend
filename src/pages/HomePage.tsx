// 📄 pages/HomePage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/Common/SectionTitle";
import PolicyList from "../components/Policy/PolicyList";
import CommunityPostList from "../components/Community/CommunityPostList";
import GreetingCard from "../components/GreetingCard/GreetingCard";
import AiReportBanner from "../components/AiReportBanner/AiReportBanner";
import { dummyPolicies } from "../mock/policies";
import { useCommunityStore } from "../store/community/useCommunityStore";
import { dummyCommunityPosts } from "../mock/communityPosts";
import { dummyCommunityComments } from "../mock/communityComments";

const HomePage = () => {
  const navigate = useNavigate();

  const setInitialData = useCommunityStore((state) => state.setInitialData);
  const posts = useCommunityStore((state) => state.posts);
  const comments = useCommunityStore((state) => state.comments);

  useEffect(() => {
    if (posts.length === 0 || comments.length === 0) {
      setInitialData(dummyCommunityPosts, dummyCommunityComments);
    }
  }, [posts.length, comments.length, setInitialData]);

  return (
    <>
      <GreetingCard />
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
