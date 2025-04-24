// 📄 components/Community/CommunityPostList.tsx
import styled from "styled-components";
import CommunityPostCard from "./CommunityPostCard";
import { useCommunityStore } from "../../store/community/useCommunityStore";

interface Props {
  mode?: "home" | "community";
}

const Section = styled.section`
  padding: 0;
`;

const CommunityPostList = ({ mode = "community" }: Props) => {
  const { sort, region, ageGroup, job, posts, comments } = useCommunityStore();

  // 1. 필터 적용
  const filtered = posts.filter((post) => {
    const matchRegion = region === "전체" || post.author.region === region;
    const matchAge = ageGroup === "전체" || post.author.ageGroup === ageGroup;
    const matchJob = job === "전체" || post.author.job === job;
    return matchRegion && matchAge && matchJob;
  });

  // 2. 정렬 적용
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "인기순") {
      return b.likes - a.likes;
    }
    if (sort === "최신순") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  // 3. 홈에서는 상위 3개만
  const visiblePosts = mode === "home" ? sorted.slice(0, 3) : sorted;

  return (
    <Section>
      {visiblePosts.map((post) => {
        const commentCount = comments.filter((c) => c.postId === post.postId).length;

        return (
          <CommunityPostCard
            key={post.postId}
            postId={post.postId}
            author={post.author}
            content={post.content}
            likes={post.likes}
            comments={commentCount}
            views={post.views}
            createdAt={post.createdAt}
          />
        );
      })}
    </Section>
  );
};

export default CommunityPostList;