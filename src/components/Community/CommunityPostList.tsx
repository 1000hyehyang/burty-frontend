// 📄 components/Community/CommunityPostList.tsx
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import CommunityPostCard from "./CommunityPostCard";
import { dummyCommunityPosts } from "../../mock/communityPosts"; // 👈 추가

const Section = styled.section`
  padding: 0;
  margin-bottom: clamp(64px, 8vw, 80px);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(12px, 3vw, 16px);
`;

const Title = styled.h2`
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
`;

const More = styled.button`
  font-size: clamp(12px, 3vw, 13px);
  font-weight: 500;
  color: var(--variable-collection-primary-100);
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CommunityPostList = () => {
  return (
    <Section>
      <Header>
        <Title>HOT 게시판</Title>
        <More>
          더보기 <FaChevronRight size={12} />
        </More>
      </Header>

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
