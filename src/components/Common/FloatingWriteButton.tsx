// 📄 components/Common/FloatingWriteButton.tsx
import styled from "styled-components";
import { FaPen } from "react-icons/fa6";
import hoverAndClickEffect from "./mixins/hoverAndClickEffect";

const Button = styled.button`
  position: sticky;
  bottom: 80px;
  left: 100%;
  transform: translateX(-5%);

  background: linear-gradient(
    90deg,
    var(--variable-collection-primary-200),
    var(--variable-collection-primary-100)
  );

  color: var(--variable-collection-bg-100);
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  z-index: 99;

  ${hoverAndClickEffect}

  svg {
    font-size: 18px;
  }
`;

interface Props {
  onClick: () => void;
}

const FloatingWriteButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick} aria-label="글쓰기 버튼">
      <FaPen />
    </Button>
  );
};

export default FloatingWriteButton;
