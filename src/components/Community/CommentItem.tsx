// 📄 components/Community/CommentItem.tsx
import styled from "styled-components";
import { CommunityComment } from "../../mock/communityComments";
import Badge from "../Common/Badge";
import { FaHeart } from "react-icons/fa";

const Box = styled.div`
  background: var(--variable-collection-bg-100);
  padding: 14px 16px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  margin-bottom: 12px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  flex-wrap: wrap;
`;

const Nickname = styled.span`
  font-weight: 600;
  font-size: 12px;
`;

const Time = styled.span`
  font-size: 10px;
  color: #aaa;
`;

const Content = styled.p`
  font-size: 13px;
  margin: 4px 0 12px;
  color: var(--variable-collection-text-300);
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #aaa;
`;

interface Props {
  comment: CommunityComment;
}

const CommentItem = ({ comment }: Props) => {
  return (
    <Box>
      <TopRow>
        <Nickname>{comment.nickname}</Nickname>
        <Badge type="primary" size="small">20대</Badge>
        <Badge type="primary" size="small">부산</Badge>
        <Badge type="primary" size="small">IT 개발</Badge>
      </TopRow>
      <Time>{new Date(comment.createdAt).toLocaleString()}</Time>
      <Content>{comment.content}</Content>
      <BottomRow>
        <span><FaHeart /> {comment.likes}</span>
        <span>신고하기</span>
      </BottomRow>
    </Box>
  );
};

export default CommentItem;
