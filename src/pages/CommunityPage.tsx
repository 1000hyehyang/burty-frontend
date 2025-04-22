// 📄 pages/CommunityPage.tsx
import { useState } from "react";
import styled from "styled-components";
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";

const PageWrapper = styled.div`
  background-color: var(--variable-collection-bg-200);
`;

const CommunityPage = () => {
  const [sort, setSort] = useState("인기순");
  const [region, setRegion] = useState("부산");
  const [ageGroup, setAgeGroup] = useState("20대");
  const [job, setJob] = useState("직무");

  const resetFilters = () => {
    setSort("인기순");
    setRegion("지역");
    setAgeGroup("연령대");
    setJob("직무");
  };

  return (
    <PageWrapper>
      <CommunityFilters
        sort={sort}
        region={region}
        ageGroup={ageGroup}
        job={job}
        setSort={setSort}
        setRegion={setRegion}
        setAgeGroup={setAgeGroup}
        setJob={setJob}
        onReset={resetFilters}
      />
      <CommunityPostList />
    </PageWrapper>
  );
};

export default CommunityPage;
