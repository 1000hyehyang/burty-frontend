// 📄 pages/CommunityPage.tsx
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";
import SectionTitle from "../components/Common/SectionTitle";
import FloatingWriteButton from "../components/Common/FloatingWriteButton";
import CommunityWriteModal from "../components/Community/CommunityWriteModal";

const CommunityPage = () => {
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
