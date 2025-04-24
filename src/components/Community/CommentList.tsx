import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useEffect, useRef } from "react";
import { useCommunityStore } from "../../store/community/useCommunityStore";
import { dummyCommunityComments } from "../../mock/communityComments";
import { dummyCommunityPosts } from "../../mock/communityPosts";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentList = ({ postId }: { postId: number }) => {
  const posts = useCommunityStore((s) => s.posts);
  const allComments = useCommunityStore((s) => s.comments);
  const setInitialData = useCommunityStore((s) => s.setInitialData);

  const comments = allComments.filter((c) => c.postId === postId);

  // 최초 1회만 더미 데이터 삽입
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current && (posts.length === 0 || allComments.length === 0)) {
      setInitialData(dummyCommunityPosts, dummyCommunityComments);
      initialized.current = true;
    }
  }, [posts.length, allComments.length, setInitialData]);

  return (
    <ListWrapper>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </ListWrapper>
  );
};

export default CommentList;
