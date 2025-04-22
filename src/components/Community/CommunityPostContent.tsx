// 📄 components/Community/CommunityPostContent.tsx
import styled from "styled-components";
import { FaHeart, FaRegComment } from "react-icons/fa";
import Badge from "../Common/Badge";
import { getTimeAgo } from "../../utils/timeAgo";

interface Props {
  nickname: string;
  ageGroup: string;
  location: string;
  job: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  isMyPost?: boolean;
}

const Card = styled.div`
  background-color: var(--variable-collection-bg-100);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TopRow = styled.div`
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
`;

const InfoBox = styled.div`
  flex: 1;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Nickname = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const TimeRow = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
`;

const ContentText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: var(--variable-collection-text-300);
  white-space: pre-line;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stats = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: #a9a9a9;
  font-size: 13px;

  svg {
    margin-right: 4px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;

  button {
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 10px;
  }

  .edit {
    background: var(--variable-collection-bg-100);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  .delete {
    background: var(--action-negative-bg, #fdd9d9);
    color: var(--action-negative);
  }
`;

const CommunityPostContent = ({
  nickname,
  ageGroup,
  location,
  job,
  content,
  createdAt,
  likes,
  comments,
  isMyPost = true,
}: Props) => {
  return (
    <Card>
      <TopRow>
        <ProfileImage src="/default-profile.png" />
        <InfoBox>
          <NameRow>
            <Nickname>{nickname}</Nickname>
            <Badge size="small">{ageGroup}</Badge>
            <Badge size="small">{location}</Badge>
            <Badge size="small">{job}</Badge>
          </NameRow>
          <TimeRow>{getTimeAgo(createdAt)}</TimeRow>
        </InfoBox>
      </TopRow>

      <ContentText>{content}</ContentText>

      <Footer>
        <Stats>
          <span>
            <FaHeart /> {likes}
          </span>
          <span>
            <FaRegComment /> {comments}
          </span>
        </Stats>
        {isMyPost && (
          <Actions>
            <button className="edit">수정하기</button>
            <button className="delete">삭제하기</button>
          </Actions>
        )}
      </Footer>
    </Card>
  );
};

export default CommunityPostContent;
