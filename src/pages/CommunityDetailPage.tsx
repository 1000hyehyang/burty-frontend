// 📄 pages/CommunityDetailPage.tsx
import { useParams } from "react-router-dom";
import { useCommunityStore } from "../store/community/useCommunityStore";
import CommunityPostDetail from "../components/Community/CommunityPostDetail";
import SectionTitle from "../components/Common/SectionTitle";
import CommentForm from "../components/Community/CommentForm";
import CommentList from "../components/Community/CommentList";

const CommunityDetailPage = () => {
  const { postId } = useParams();
  const post = useCommunityStore((state) =>
    state.posts.find((p) => p.postId === Number(postId))
  );
  const commentCount = useCommunityStore((state) =>
    state.comments.filter((c) => c.postId === Number(postId)).length
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
              {commentCount}개
            </span>
          </>
        }
      />
      <CommentForm postId={post.postId} />
      <CommentList postId={post.postId} />
    </>
  );
};

export default CommunityDetailPage;
