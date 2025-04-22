// 📄 pages/CommunityDetailPage.tsx
import { useParams } from "react-router-dom";
import { dummyCommunityPosts } from "../mock/communityPosts";
import { dummyCommunityComments } from "../mock/communityComments";
import CommunityPostDetail from "../components/Community/CommunityPostDetail";
import CommentForm from "../components/Community/CommentForm";
import CommentItem from "../components/Community/CommentItem";

const CommunityDetailPage = () => {
  const { postId } = useParams();
  const post = dummyCommunityPosts.find((p) => p.postId === Number(postId));
  const comments = dummyCommunityComments.filter(
    (c) => c.postId === Number(postId)
  );

  if (!post) return <p>해당 게시글이 존재하지 않습니다.</p>;

  return (
    <>
      <CommunityPostDetail post={post} />
      <section>
        <h3>댓글 {comments.length}개</h3>
        <CommentForm />
        {comments.map((comment) => (
          <CommentItem key={comment.commentId} comment={comment} />
        ))}
      </section>
    </>
  );
};

export default CommunityDetailPage;
