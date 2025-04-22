// 📄 components/Community/CommunityPostDetail.tsx
import styled from "styled-components";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { CommunityPost } from "../../mock/communityPosts";
import Badge from "../Common/Badge";

const Wrapper = styled.div`
  background: var(--variable-collection-bg-100);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const Nickname = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const Time = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
`;

const Content = styled.p`
  font-size: 14px;
  color: var(--variable-collection-text-300);
  line-height: 1.6;
  white-space: pre-line;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stats = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 13px;
  color: #a9a9a9;

  button {
    all: unset;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover svg {
      stroke: var(--variable-collection-action-negative);
    }

    svg {
      font-size: 16px;
    }
  }

  .liked {
    color: var(--variable-collection-action-negative);
  }

  .comment {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #999;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 10px;
    font-weight: 500;
    white-space: nowrap;
  }

  .edit {
    background: #fafafa;
  }

  .delete {
    background: #fdd9d9;
    color: var(--variable-collection-action-negative);
  }
`;

interface Props {
  post: CommunityPost;
  isMyPost?: boolean;
}

const CommunityPostDetail = ({ post, isMyPost = true }: Props) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) return;
    setLikes((prev) => prev + 1);
    setLiked(true);
  };

  return (
    <Wrapper>
      <TopRow>
        <ProfileImage src="/default-profile.png" />
        <InfoBox>
          <NameRow>
            <Nickname>{post.nickname}</Nickname>
            <Badge type="primary" size="small">{post.ageGroup}</Badge>
            <Badge type="primary" size="small">{post.location}</Badge>
            <Badge type="primary" size="small">{post.job}</Badge>
          </NameRow>
          <Time>{new Date(post.createdAt).toLocaleString()}</Time>
        </InfoBox>
      </TopRow>

      <Content>{post.content}</Content>

      <BottomRow>
        <Stats>
          <button onClick={handleLike} className={liked ? "liked" : ""}>
            {liked ? <FaHeart /> : <FaRegHeart />} {likes}
          </button>
          <span className="comment">
            <FaRegComment /> {post.comments}
          </span>
        </Stats>

        {isMyPost && (
          <Buttons>
            <button className="edit">수정하기</button>
            <button className="delete">삭제하기</button>
          </Buttons>
        )}
      </BottomRow>
    </Wrapper>
  );
};

export default CommunityPostDetail;
