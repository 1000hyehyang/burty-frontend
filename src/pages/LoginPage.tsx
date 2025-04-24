// 📄 pages/LoginPage.tsx
import styled from "styled-components";
import WelcomeSection from "../components/Auth/WelcomeSection";
import SocialLoginButtons from "../components/Auth/SocialLoginButtons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 100px;
`;

const StartButton = styled.button`
  margin: 24px 0;
  padding: 12px 20px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  color: var(--variable-collection-text-100);
  background: var(--variable-collection-bg-100);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <WelcomeSection />
      <StartButton>3초만에 시작하기 🚀</StartButton>
      <SocialLoginButtons />
    </Wrapper>
  );
};

export default LoginPage;
