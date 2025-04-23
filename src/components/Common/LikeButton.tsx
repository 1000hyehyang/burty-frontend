// 📄 components/Common/LikeButton.tsx
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  initialLikes: number;
  iconSize?: number;
  fontSize?: number;
}

const Button = styled.button<{ liked: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: ${({ liked }) =>
    liked ? "var(--variable-collection-action-negative)" : "#999"};
  transition: color 0.2s;

  &:hover svg {
    transform: scale(1.1);
  }

  svg {
    font-size: 16px;
  }
`;

const LikeButton = ({ initialLikes, iconSize = 16, fontSize = 13 }: Props) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <Button onClick={handleClick} liked={liked} style={{ fontSize }}>
      {liked ? <FaHeart size={iconSize} /> : <FaRegHeart size={iconSize} />} {likes}
    </Button>
  );
};

export default LikeButton;
