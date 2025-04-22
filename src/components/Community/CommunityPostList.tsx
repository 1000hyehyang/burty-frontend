// 📄 components/Community/CommunityPostList.tsx
import styled from "styled-components";
import CommunityPostCard from "./CommunityPostCard";
import { dummyCommunityPosts } from "../../mock/communityPosts"; // 👈 추가

const Section = styled.section`
  padding: 0;
  margin-bottom: clamp(64px, 8vw, 80px);
`;

const CommunityPostList = () => {
  return (
    <Section>
      {dummyCommunityPosts.map((post, index) => (
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
