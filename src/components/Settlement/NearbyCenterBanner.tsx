// 📄 components/Settlement/NearbyCenterBanner.tsx
import { useNavigate } from "react-router-dom";
import BaseBanner from "../Common/BaseBanner/BaseBanner";
import CenterIcon from "../../assets/images/youth-center-icon.svg";

const NearbyCenterBanner = () => {
  const navigate = useNavigate();

  return (
    <BaseBanner
      iconSrc={CenterIcon}
      iconAlt="청년센터 아이콘"
      title={
        <>
          가까운 <span>청년 센터,</span>여기에 있어요
        </>
      }
      subtitle="내가 사는 지역 가까이, 청년 누구나 이용할 수 있는 공간."
      buttonText="가까운 청년 센터 알아 보기"
      onClick={() => navigate("/centers")} 
    />
  );
};

export default NearbyCenterBanner;
