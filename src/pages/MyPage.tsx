// 📄 pages/MyPage.tsx
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CategoryTabs from "../components/Common/CategoryTabs";
import SectionTitle from "../components/Common/SectionTitle";
import MyBookmarkedPolicyList from "../components/Profile/MyBookmarkedPolicyList";

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: var(--variable-collection-bg-300);
  margin: 8px 0;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const categories = ["찜 목록", "히스토리", "커뮤니티"];
  const selected = "찜 목록";

  return (
    <>
      {/* 추후 마이 정보 카드 컴포넌트도 여기에 삽입 */}
      <CategoryTabs
        categories={categories}
        selected={selected}
        onSelect={(v) => console.log(v)}
      />

      <SectionTitle
        title="찜한 정책"
        showMoreButton
        onClickMore={() => navigate("/profile/bookmarks")}
      />
      <MyBookmarkedPolicyList />

      <Divider />

      <SectionTitle title="설정" />
      {/* 개인정보수정, 로그아웃, 회원탈퇴 UI 추가 예정 */}
    </>
  );
};

export default MyPage;
