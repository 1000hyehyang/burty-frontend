// 📄 pages/CommunityPage.tsx
import { useEffect } from "react";
import { useCommunityStore } from "../store/community/useCommunityStore";
import { dummyCommunityPosts } from "../mock/communityPosts";
import { dummyCommunityComments } from "../mock/communityComments";
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";
import SectionTitle from "../components/Common/SectionTitle";
import FloatingWriteButton from "../components/Common/FloatingWriteButton";
import CommunityWriteModal from "../components/Community/CommunityWriteModal";

const CommunityPage = () => {
  // API 연동 전 더미 데이터 보여주기
  const setInitialData = useCommunityStore((state) => state.setInitialData);

  useEffect(() => {
    setInitialData(dummyCommunityPosts, dummyCommunityComments);
  }, [setInitialData]);

  return (
    <>
      <CommunityFilters />
      <SectionTitle title="커뮤니티 게시판" />
      <CommunityPostList mode="community" />
      <FloatingWriteButton />
      <CommunityWriteModal />
    </>
  );
};

export default CommunityPage;
