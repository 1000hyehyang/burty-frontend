// 📄 components/Auth/WelcomeSection.tsx
import styled from "styled-components";
import burtyImage from "../../assets/images/welcome-logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 120px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--variable-collection-text-100);
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--variable-collection-text-300);
`;

const WelcomeSection = () => (
  <Container>
    <Image src={burtyImage} alt="버티 캐릭터" />
    <Title>반가워요!<br />버티와 함께 정착해볼까요?</Title>
    <Subtitle>이제부터 방황하지 말고 버티에서 해결해요</Subtitle>
  </Container>
);

export default WelcomeSection;
