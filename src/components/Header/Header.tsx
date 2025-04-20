// 📄 components/Header/Header.tsx
import styled from "styled-components";
import { FaBell } from "react-icons/fa";

const Container = styled.header`
  padding: clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--variable-collection-bg-100);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`;

const Logo = styled.h1`
  font-size: clamp(18px, 5vw, 22px);
  font-weight: 600; /* Pretendard-SemiBold */
  color: var(--variable-collection-primary-100);
`;

const BellWrapper = styled.div`
  position: relative;
`;

const RedDot = styled.div`
  width: clamp(6px, 1.5vw, 8px);
  height: clamp(6px, 1.5vw, 8px);
  background-color: var(--variable-collection-action-negative);
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Header = () => {
  return (
    <Container>
      <Logo>버티</Logo>
      <BellWrapper>
        <FaBell size={20} color="var(--variable-collection-text-200)" />
        <RedDot />
      </BellWrapper>
    </Container>
  );
};

export default Header;
