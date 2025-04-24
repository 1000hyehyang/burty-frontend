// 📁 components/Policy/PolicyCard.tsx
import styled from "styled-components";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Badge from "../Common/Badge";
import { useBookmarkStore } from "../../store/global/useBookmarkStore";
import { Policy } from "../../types/policy";
import hoverAndClickEffect from "../Common/mixins/hoverAndClickEffect";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  background-color: var(--variable-collection-bg-100);
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  ${hoverAndClickEffect}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TagGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BookmarkButton = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ $active }) => ($active ? "#ECD089" : "#ccc")};
  transition: color 0.2s;

  &:hover {
    color: #ecd089;
  }

  svg {
    font-size: 18px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--variable-collection-text-100);
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: var(--variable-collection-text-300);
  margin: 0 0 10px 0;
`;

const Info = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0 0 4px 0;
`;

const Date = styled.p`
  font-size: 12px;
  color: #aaa;
  margin: 0;
`;

const PolicyCard = (policy: Policy) => {
  const navigate = useNavigate();
  const isBookmarked = useBookmarkStore((s) => s.isBookmarked(policy.id));
  const toggleBookmark = useBookmarkStore((s) => s.toggleBookmark);

  const handleClick = () => {
    navigate(`/policy/${policy.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Header>
        <TagGroup>
          <Badge type="primary">{policy.category}</Badge>
          <Badge type={policy.isClosed ? "gray" : "positive"}>{policy.dday}</Badge>
        </TagGroup>
        <BookmarkButton
          $active={isBookmarked}
          onClick={(e) => {
            e.stopPropagation(); // 카드 클릭 막기
            toggleBookmark(policy.id);
          }}
        >
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkButton>
      </Header>
      <Title>{policy.title}</Title>
      <Description>{policy.description}</Description>
      <Info>일자리 &gt; {policy.category} ｜ 고용노동부 ｜ 18~34세</Info>
      <Date>신청기간: {policy.dateRange}</Date>
    </Card>
  );
};

export default PolicyCard;
