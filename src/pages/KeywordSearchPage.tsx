// 📄 pages/KeywordSearchPage.tsx
import { useState } from "react";
import LocationBanner from "../components/LocationBanner/LocationBanner";
import SearchBar from "../components/Common/SearchBar";
import PolicyList from "../components/Policy/PolicyList";

const KeywordSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <LocationBanner
        location="경기도 구리시"
        onChangeLocation={() => alert("위치 변경")}
      />
      <SearchBar
        placeholder="정책명 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFilterClick={() => alert("필터 열기")}
      />
      <PolicyList mode="all" />
    </>
  );
};

export default KeywordSearchPage;
