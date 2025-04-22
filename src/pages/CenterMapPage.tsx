// 📄 pages/CenterMapPage.tsx
import LocationBanner from "../components/LocationBanner/LocationBanner";
import KakaoMap from "../components/Map/KakaoMap";
import SectionTitle from "../components/Common/SectionTitle";
import YouthCenterList from "../components/YouthCenter/YouthCenterList";

const CenterMapPage = () => {
  return (
    <>
      <LocationBanner
        location="경기도 구리시"
        onChangeLocation={() => console.log("위치 변경")}
      />
      <KakaoMap />
      <SectionTitle title="청년센터 목록" showMoreButton={false} />
      <YouthCenterList />;
    </>
  );
};

export default CenterMapPage;
