// 📄 components/Community/CommunityPostList.tsx
import styled from "styled-components";
import CommunityPostCard from "./CommunityPostCard";
import { dummyCommunityPosts } from "../../mock/communityPosts";

interface Props {
  mode?: "home" | "community"; // 기본값: community
}

const Section = styled.section`
  padding: 0;
  margin-bottom: clamp(64px, 8vw, 80px);
`;

const CommunityPostList = ({ mode = "community" }: Props) => {
  // 인기순 정렬
  const sorted = [...dummyCommunityPosts].sort((a, b) => b.likes - a.likes);

  const postsToShow = mode === "home" ? sorted.slice(0, 3) : sorted;

  return (
    <Section>
      {postsToShow.map((post, index) => (
        <CommunityPostCard
          key={index}
          nickname={post.nickname}
          ageGroup={post.ageGroup}
          location={post.location}
          job={post.job}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          views={post.views}
        />
      ))}
    </Section>
  );
};

export default CommunityPostList;
