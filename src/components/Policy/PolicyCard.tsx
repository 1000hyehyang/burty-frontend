// 📄 components/Policy/PolicyCard.tsx
import styled from "styled-components";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";

interface PolicyCardProps {
  category: string;
  title: string;
  description: string;
  dateRange: string;
  dday: string;
  isClosed?: boolean;
}

const Card = styled.div<{ closed: boolean }>`
  background-color: var(--variable-collection-bg-100);
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 16px;
  opacity: ${({ closed }) => (closed ? 0.6 : 1)};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
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

const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: rgba(143, 188, 143, 0.1);
  color: var(--variable-collection-primary-100);
`;

const Dday = styled(Tag)<{ closed?: boolean }>`
  background-color: ${
    ({ closed }) =>
      closed
        ? "var(--variable-collection-bg-200)" // 회색 배경
        : "var(--variable-collection-action-positive-bg)" // D-day 파란 배경
  };
  color: ${
    ({ closed }) =>
      closed ? "#aaa" : "var(--variable-collection-action-positive)" // 파란 텍스트
  };
`;

const BookmarkButton = styled.button<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ active }) =>
    active ? "#ECD089" : "var(--variable-collection-text-200)"};
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
  font-weight: 700;
  color: var(--variable-collection-text-100);
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
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

const PolicyCard = ({
  category,
  title,
  description,
  dateRange,
  dday,
  isClosed = false,
}: PolicyCardProps) => {
  const [bookmarked, setBookmarked] = useState(false); // 선택 상태

  const toggleBookmark = () => setBookmarked((prev) => !prev);

  return (
    <Card closed={isClosed}>
      <Header>
        <TagGroup>
          <Tag>{category}</Tag>
          <Dday closed={isClosed}>{dday}</Dday>
        </TagGroup>
        <BookmarkButton active={bookmarked} onClick={toggleBookmark}>
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </BookmarkButton>
      </Header>

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Info>일자리 &gt; {category} ｜ 고용노동부 ｜ 18~34세</Info>
      <Date>신청기간: {dateRange}</Date>
    </Card>
  );
};

export default PolicyCard;
