// 📄 components/HotBoard/HotPostItem.tsx
import styled from "styled-components";

interface HotPostItemProps {
  nickname: string;
  ageGroup: string;
  location: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
}

const Card = styled.div`
  background-color: #fff;
  border-radius: clamp(12px, 3vw, 16px);
  padding: clamp(14px, 4vw, 18px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  margin-bottom: clamp(10px, 3vw, 14px);
`;

const Meta = styled.div`
  display: flex;
  gap: clamp(4px, 1.5vw, 8px);
  font-size: clamp(11px, 3vw, 13px);
  color: #888;
  margin-bottom: clamp(6px, 2vw, 10px);

  span:first-child {
    font-weight: 600;
    color: #333;
  }
`;

const Content = styled.p`
  font-size: clamp(13px, 3.5vw, 15px);
  color: #444;
  line-height: 1.4;
  margin-bottom: clamp(8px, 2vw, 12px);
  display: -webkit-box;
  -webkit-line-clamp: 2; // 두 줄로 말줄임
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  gap: clamp(12px, 3vw, 20px);
  font-size: clamp(12px, 3vw, 14px);
  color: #aaa;
`;

const HotPostItem = ({
  nickname,
  ageGroup,
  location,
  content,
  likes,
  comments,
  views,
}: HotPostItemProps) => {
  return (
    <Card>
      <Meta>
        <span>{nickname}</span>
        <span>{ageGroup}</span>
        <span>{location}</span>
      </Meta>
      <Content>{content}</Content>
      <Footer>
        <span>👍 {likes}</span>
        <span>💬 {comments}</span>
        <span>👀 {views}</span>
      </Footer>
    </Card>
  );
};

export default HotPostItem;
