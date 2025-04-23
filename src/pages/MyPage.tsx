import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyProfileCard from "../components/Profile/MyProfileCard";
import MyPageTabs from "../components/Profile/MyPageTabs";
import SectionTitle from "../components/Common/SectionTitle";
import MyBookmarkedPolicyList from "../components/Profile/MyBookmarkedPolicyList";
import {
  FaUserEdit,
  FaSignOutAlt,
  FaTrash,
  FaRegComment,
  FaHeart,
  FaRegEdit,
} from "react-icons/fa";
import MenuListGroup from "../components/Common/MenuListGroup";
import MenuListItem from "../components/Common/MenuListItem";
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
          <MenuListGroup>
            <MenuListItem
              icon={
                <FaRegEdit
                  style={{ color: "var(--variable-collection-primary-100)" }}
                />
              }
              label="내가 쓴 글"
              onClick={() => navigate("/community/my-posts")}
            />
            <MenuListItem
              icon={
                <FaHeart
                  style={{ color: "var(--variable-collection-primary-100)" }}
                />
              }
              label="좋아요 한 글"
              onClick={() => navigate("/community/liked")}
            />
            <MenuListItem
              icon={
                <FaRegComment
                  style={{ color: "var(--variable-collection-primary-100)" }}
                />
              }
              label="댓글 단 글"
              onClick={() => navigate("/community/comments")}
            />
          </MenuListGroup>
          <Divider />
        </>
      )}

      <SectionTitle title="설정" />
      <MenuListGroup>
        <MenuListItem
          icon={<FaUserEdit style={{ color: "var(--variable-collection-primary-100)" }} />}
          label="개인정보 수정"
          onClick={() => alert("개인정보 수정")}
        />
        <MenuListItem
          icon={<FaSignOutAlt style={{ color: "var(--variable-collection-action-negative)" }}/>}
          label="로그아웃"
          onClick={() => alert("로그아웃")}
        />
        <MenuListItem
          icon={<FaTrash style={{ color: "var(--variable-collection-action-negative)" }}/>}
          label="회원 탈퇴"
          onClick={() => alert("회원 탈퇴")}
        />
      </MenuListGroup>
    </>
  );
};

export default MyPage;
