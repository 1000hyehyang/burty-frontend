// 📄 components/Settlement/SimilarGroupCard.tsx
import IconCard from "../Common/IconCard";
import GuideBookIcon from "../../assets/images/guide-book-icon.svg";

const SimilarGroupCard = () => (
  <IconCard
    text={`나와 유사한<br/>청년 그룹 분석`}
    iconSrc={GuideBookIcon}
    alt="분석 아이콘"
  />
);

export default SimilarGroupCard;
