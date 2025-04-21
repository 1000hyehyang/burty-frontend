// 📄 components/Community/CommunityPostCard.tsx
import styled from "styled-components";
import { FaHeart, FaRegComment, FaEye } from "react-icons/fa";
import Badge from "../Common/Badge";

interface CommunityPostCardProps {
  nickname: string;
  ageGroup: string;
  location: string;
  job: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
}

// 카드 자체에 양쪽 여백 포함
const Card = styled.div`
  background-color: var(--variable-collection-bg-100);
  border-radius: 15px;
  padding: 16px 50px 16px 20px;
  margin-bottom: clamp(16px, 4vw, 20px);
  display: flex;
  gap: clamp(10px, 4vw, 14px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  cursor: pointer;
`;

const ProfileImage = styled.div`
  width: clamp(28px, 6vw, 32px);
  height: clamp(28px, 6vw, 32px);
  border-radius: 50%;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0px, 0.25vw, 2px);
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(4px, 1vw, 6px);
  flex-wrap: wrap;
`;

const Nickname = styled.span`
  font-size: clamp(12px, 3vw, 13px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
`;

const Time = styled.span`
  font-size: clamp(10px, 2.5vw, 11px);
  font-weight: 500;
  color: #a9a9a9;
`;

const ContentText = styled.p`
  font-size: clamp(11px, 3vw, 13px);
  font-weight: 500;
  color: var(--variable-collection-text-300);
  line-height: 1.25;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Footer = styled.div`
  display: flex;
  gap: clamp(12px, 3vw, 16px);
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: clamp(10px, 2.8vw, 11px);
  color: #a9a9a9;

  svg {
    font-size: clamp(10px, 2.5vw, 12px);
  }
`;

const CommunityPostCard = ({
  nickname,
  ageGroup,
  location,
  job,
  content,
  likes,
  comments,
  views,
}: CommunityPostCardProps) => {
  return (
    <Card>
      <ProfileImage />
      <ContentBox>
        <TopRow>
          <Nickname>{nickname}</Nickname>
          <Badge type="primary" size="small">
            {ageGroup}
          </Badge>
          <Badge type="primary" size="small">
            {location}
          </Badge>
          <Badge type="primary" size="small">
            {job}
          </Badge>
        </TopRow>
        <Time>47분전</Time>
        <ContentText>{content}</ContentText>
        <Footer>
          <Stat>
            <FaHeart /> {likes}
          </Stat>
          <Stat>
            <FaRegComment /> {comments}
          </Stat>
          <Stat>
            <FaEye /> {views}
          </Stat>
        </Footer>
      </ContentBox>
    </Card>
  );
};

export default CommunityPostCard;
