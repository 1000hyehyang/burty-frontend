// 📄 components/Community/CommunityPostDetail.tsx
import styled from "styled-components";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { CommunityPost } from "../../mock/communityPosts";
import Badge from "../Common/Badge";

const Wrapper = styled.div`
  background: var(--variable-collection-bg-100);
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  margin-bottom: 24px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Nickname = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const Time = styled.span`
  font-size: 10px;
  color: #aaa;
`;

const Content = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: var(--variable-collection-text-300);
  line-height: 1.4;
`;

const BottomRow = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stats = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 13px;
  color: var(--text-300);
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 4px 8px;
    font-size: 10px;
    border-radius: 10px;
    font-weight: 500;
  }

  .edit {
    background: #fafafa;
  }

  .delete {
    background: #fdd9d9;
    color: var(--action-negative);
  }
`;

interface Props {
  post: CommunityPost;
}

const CommunityPostDetail = ({ post }: Props) => {
  return (
    <Wrapper>
      <TopRow>
        <Nickname>{post.nickname}</Nickname>
        <Badge type="primary" size="small">{post.ageGroup}</Badge>
        <Badge type="primary" size="small">{post.location}</Badge>
        <Badge type="primary" size="small">{post.job}</Badge>
      </TopRow>
      <Time>{new Date(post.createdAt).toLocaleString()}</Time>
      <Content>{post.content}</Content>

      <BottomRow>
        <Stats>
          <span><FaHeart /> {post.likes}</span>
          <span><FaRegComment /> {post.comments}</span>
        </Stats>
        <Buttons>
          <button className="edit">수정하기</button>
          <button className="delete">삭제하기</button>
        </Buttons>
      </BottomRow>
    </Wrapper>
  );
};

export default CommunityPostDetail;
