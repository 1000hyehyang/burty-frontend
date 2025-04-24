import styled from "styled-components";
import kakaoImg from "../../assets/images/kakao-login.svg";
import googleImg from "../../assets/images/google-login.png";

const Container = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const LoginButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SocialLoginButtons = () => (
  <Container>
    <LoginButton onClick={() => alert("카카오 로그인")}>
      <IconImage src={kakaoImg} alt="카카오 로그인" />
    </LoginButton>
    <LoginButton onClick={() => alert("구글 로그인")}>
      <IconImage src={googleImg} alt="구글 로그인" />
    </LoginButton>
  </Container>
);

export default SocialLoginButtons;
