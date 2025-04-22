// 📄 pages/CommunityPage.tsx
import SectionTitle from "../components/Common/SectionTitle";
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";

const CommunityPage = () => {
  return (
    <>
      <CommunityFilters />
      <SectionTitle title="커뮤니티 게시판" />
      <CommunityPostList mode="community" />
    </>
  );
};

export default CommunityPage;
