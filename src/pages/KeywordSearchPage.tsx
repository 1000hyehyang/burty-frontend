// 📄 pages/KeywordSearchPage.tsx
import { useState } from "react";
import LocationBanner from "../components/LocationBanner/LocationBanner";
import SearchBar from "../components/Common/SearchBar";
import PolicyList from "../components/Policy/PolicyList";
import { dummyPolicies } from "../mock/policies";

const KeywordSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 대소문자 무시하고 title에서 검색어 포함 여부 체크
  const filteredPolicies = dummyPolicies.filter((policy) =>
    policy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <PolicyList policies={filteredPolicies} showTabs />
    </>
  );
};

export default KeywordSearchPage;
