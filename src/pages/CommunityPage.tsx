// 📄 pages/CommunityPage.tsx
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";

const CommunityPage = () => {
  return (
    <>
      <CommunityFilters />
      <CommunityPostList mode="community" />
    </>
  );
};

export default CommunityPage;
