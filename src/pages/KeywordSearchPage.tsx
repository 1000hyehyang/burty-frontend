// 📄 pages/KeywordSearchPage.tsx
import LocationBanner from "../components/LocationBanner/LocationBanner";
import PolicyList from "../components/Policy/PolicyList";
import SearchBar from "../components/Common/SearchBar";
import { useState } from "react";

const KeywordSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* 위치 배너 */}
      <LocationBanner
        location="경기도 구리시"
        onChangeLocation={() => alert("위치 변경")}
      />

      {/* 검색창 */}
      <SearchBar
        placeholder="정책명 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFilterClick={() => alert("필터 열기")}
      />

      {/* 정책 목록 */}
      <PolicyList />
    </>
  );
};

export default KeywordSearchPage;
