// 📄 pages/CommunityPage.tsx
import SectionTitle from "../components/Common/SectionTitle";
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";
import FloatingWriteButton from "../components/Common/FloatingWriteButton";

const CommunityPage = () => {
  const handleWrite = () => {
    alert("글쓰기 이동!");
  };

  return (
    <>
      <CommunityFilters />
      <SectionTitle title="커뮤니티 게시판" />
      <CommunityPostList mode="community" />
      <FloatingWriteButton onClick={handleWrite} />
    </>
  );
};

export default CommunityPage;
