// 📄 components/Community/CommentItem.tsx
import styled from "styled-components";
import LikeButton from "../Common/LikeButton";
import { MdReport } from "react-icons/md";
import { CommunityComment } from "../../mock/communityComments";
import Badge from "../Common/Badge";
import { getTimeAgo } from "../../utils/timeAgo";

const Wrapper = styled.div`
  background: var(--variable-collection-bg-100);
  padding: 14px 16px;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const ContentBox = styled.div`
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Nickname = styled.span`
  font-weight: 600;
  font-size: 13px;
`;

const Time = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
`;

const CommentText = styled.p`
  font-size: 12px;
  color: var(--variable-collection-text-300);
  margin: 8px 0 12px;
  line-height: 1.4;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  font-size: 13px;
  color: #999;
`;

const IconButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #999;

  svg {
    font-size: 14px;
  }

  &:hover {
    color: var(--variable-collection-action-negative);
  }
`;

interface Props {
  comment: CommunityComment;
}

const CommentItem = ({ comment }: Props) => {
  const handleReport = () => {
    alert("신고되었습니다."); // 나중에 API 연동 가능
  };

  return (
    <Wrapper>
      <ProfileImage src="/default-profile.png" alt="프로필 이미지" />
      <ContentBox>
        <TopRow>
          <Nickname>{comment.nickname}</Nickname>
          <Badge type="primary" size="small">
            {comment.ageGroup}
          </Badge>
          <Badge type="primary" size="small">
            {comment.location}
          </Badge>
          <Badge type="primary" size="small">
            {comment.job}
          </Badge>
        </TopRow>
        <Time>{getTimeAgo(comment.createdAt)}</Time>
        <CommentText>{comment.content}</CommentText>
        <BottomRow>
          <LikeButton
            initialLikes={comment.likes}
            fontSize={13}
            iconSize={14}
          />

          <IconButton onClick={handleReport}>
            <MdReport /> 신고하기
          </IconButton>
        </BottomRow>
      </ContentBox>
    </Wrapper>
  );
};

export default CommentItem;
