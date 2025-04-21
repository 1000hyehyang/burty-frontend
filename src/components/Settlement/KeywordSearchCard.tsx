// 📄 components/Settlement/KeywordSearchCard.tsx
import IconCard from "../Common/IconCard";
import FindBookIcon from "../../assets/images/find-book-icon.svg";

const KeywordSearchCard = () => (
  <IconCard
    text={`키워드로 한눈에<br/>맞춤 정책 보기`}
    iconSrc={FindBookIcon}
    alt="검색 아이콘"
  />
);

export default KeywordSearchCard;
