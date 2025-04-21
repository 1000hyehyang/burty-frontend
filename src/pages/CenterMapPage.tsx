// 📄 pages/CenterMapPage.tsx
import KakaoMap from "../components/Map/KakaoMap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 4vw, 24px);
`;

const CenterMapPage = () => {
  return (
    <Container>
      <KakaoMap />
    </Container>
  );
};

export default CenterMapPage;
