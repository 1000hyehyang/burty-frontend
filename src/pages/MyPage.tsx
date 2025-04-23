import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyProfileCard from "../components/Profile/MyProfileCard";
import MyPageTabs from "../components/Profile/MyPageTabs";
import SectionTitle from "../components/Common/SectionTitle";
import MyBookmarkedPolicyList from "../components/Profile/MyBookmarkedPolicyList";
import { useMyPageStore } from "../store/useMyPageStore";

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: var(--variable-collection-bg-300);
  margin: 8px 0;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const selectedTab = useMyPageStore((s) => s.selectedTab);

  return (
    <>
      <MyProfileCard
        name="김버티"
        region="서울특별시 관악구"
        ageLabel="32세 (1992년생)"
      />

      <MyPageTabs />

      {selectedTab === "찜 목록" && (
        <>
          <SectionTitle
            title="찜한 정책"
            showMoreButton
            onClickMore={() => navigate("/profile/bookmarks")}
          />
          <MyBookmarkedPolicyList limit={2} />
          <Divider />
        </>
      )}

      {selectedTab === "히스토리" && (
        <>
          <SectionTitle title="히스토리" />
          <p style={{ fontSize: "14px", color: "#999" }}>
            히스토리 목록 준비 중...
          </p>
          <Divider />
        </>
      )}

      {selectedTab === "커뮤니티" && (
        <>
          <SectionTitle title="내 커뮤니티 활동" />
          <p style={{ fontSize: "14px", color: "#999" }}>
            작성한 게시글, 댓글 보기 예정
          </p>
          <Divider />
        </>
      )}

      <SectionTitle title="설정" />
      {/* 설정 메뉴: 개인정보 수정, 로그아웃, 회원탈퇴 등 추가 예정 */}
    </>
  );
};

export default MyPage;
