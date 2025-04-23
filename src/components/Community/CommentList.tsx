// 📄 components/Community/CommentList.tsx
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { CommunityComment } from "../../mock/communityComments";

interface Props {
  comments: CommunityComment[];
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; // 아이템 사이 간격
`;

const CommentList = ({ comments }: Props) => {
  return (
    <ListWrapper>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </ListWrapper>
  );
};

export default CommentList;

