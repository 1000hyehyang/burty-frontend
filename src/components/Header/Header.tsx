import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import LogoImage from "../../assets/images/logo.png";

const Container = styled.header`
  padding: clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--variable-collection-bg-100);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`;

const Logo = styled.img`
  height: clamp(16px, 5vw, 20px);
  object-fit: contain;
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
      <Logo src={LogoImage} alt="버티 로고" />
      <BellWrapper>
        <FaBell size={20} color="var(--variable-collection-text-200)" />
        <RedDot />
      </BellWrapper>
    </Container>
  );
};

export default Header;
