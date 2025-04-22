// 📄 pages/KeywordSearchPage.tsx
import styled from "styled-components";
import LocationBanner from "../components/LocationBanner/LocationBanner";
import PolicyList from "../components/Policy/PolicyList";
import SearchBar from "../components/Common/SearchBar";
import { useState } from "react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 4vw, 24px);
`;

const KeywordSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default KeywordSearchPage;
