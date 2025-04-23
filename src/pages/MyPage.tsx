// 📄 pages/MyPage.tsx
import styled from "styled-components";
import CategoryTabs from "../components/Common/CategoryTabs";
import SectionTitle from "../components/Common/SectionTitle";
import MyBookmarkedPolicyList from "../components/Profile/MyBookmarkedPolicyList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: var(--variable-collection-bg-300);
  margin: 16px 0;
`;

const MyPage = () => {
  const categories = ["찜 목록", "히스토리", "커뮤니티"];
  const selected = "찜 목록"; // 상태로 바꿀 수도 있음

  return (
    <Wrapper>
      {/* 마이 정보 카드 컴포넌트도 이후 추가 가능 */}
      <CategoryTabs
        categories={categories}
        selected={selected}
        onSelect={(v) => console.log(v)}
      />

      <SectionTitle title="찜한 정책" showMoreButton />
      <MyBookmarkedPolicyList />

      <Divider />

      <SectionTitle title="설정" />
      {/* 개인정보수정, 로그아웃, 회원탈퇴 컴포넌트도 여기에 삽입 */}
    </Wrapper>
  );
};

export default MyPage;
