// 📄 components/Community/FloatingWriteButton.tsx
import styled from "styled-components";
import hoverAndClickEffect from "./mixins/hoverAndClickEffect";
import { FaPen } from "react-icons/fa";
import { useModalStore } from "../../store/store/useModalStore";

const Button = styled.button`
  position: sticky;
  bottom: 80px;
  left: 100%;
  margin-right: 24px;
  z-index: 10;
  width: 56px;
  height: 56px;
    background: linear-gradient(
    90deg,
    var(--variable-collection-primary-200),
    var(--variable-collection-primary-100)
  );
  box-shadow: 0 4px 8px rgba(80, 161, 104, 0.25);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${hoverAndClickEffect}
`;

const FloatingWriteButton = () => {
  const open = useModalStore((state) => state.open);
  return (
    <Button onClick={open}>
      <FaPen />
    </Button>
  );
};

export default FloatingWriteButton;
