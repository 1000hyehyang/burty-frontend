// 📄 pages/CenterMapPage.tsx
import LocationBanner from "../components/LocationBanner/LocationBanner";
import KakaoMap from "../components/Map/KakaoMap";
import YouthCenterList from "../components/YouthCenter/YouthCenterList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 4vw, 24px);
`;

const CenterMapPage = () => {
  return (
    <Container>
      <LocationBanner
        location="경기도 구리시"
        onChangeLocation={() => console.log("위치 변경")}
      />
      <KakaoMap />
      <YouthCenterList />;
    </Container>
  );
};

export default CenterMapPage;
