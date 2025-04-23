// 📄 pages/MyPage.tsx
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyProfileCard from "../components/Profile/MyProfileCard";
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
  const selected = "찜 목록"; // 현재 선택된 탭

  return (
    <>
      <MyProfileCard
        name="김버티"
        region="서울특별시 관악구"
        ageLabel="32세 (1992년생)"
      />
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
      <MyBookmarkedPolicyList limit={2} />

      <Divider />

      <SectionTitle title="설정" />
      {/* 설정 메뉴: 개인정보 수정, 로그아웃, 회원탈퇴 등 추후 추가 */}
    </>
  );
};

export default MyPage;
