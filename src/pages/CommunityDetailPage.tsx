// 📄 pages/CommunityDetailPage.tsx
import { useParams } from "react-router-dom";
import { dummyCommunityPosts } from "../mock/communityPosts";
import { dummyCommunityComments } from "../mock/communityComments";
import CommunityPostDetail from "../components/Community/CommunityPostDetail";
import SectionTitle from "../components/Common/SectionTitle";
import CommentForm from "../components/Community/CommentForm";
import CommentList from "../components/Community/CommentList";

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
      <SectionTitle
        title={
          <>
            댓글{" "}
            <span style={{ color: "var(--variable-collection-primary-100)" }}>
              {comments.length}개
            </span>
          </>
        }
      />
      <CommentForm />
      <CommentList comments={comments} />
    </>
  );
};

export default CommunityDetailPage;
