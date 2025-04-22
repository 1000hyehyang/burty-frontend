// 📄 pages/CommunityPage.tsx
import { useState } from "react";
import CommunityFilters from "../components/Community/CommunityFilters";
import CommunityPostList from "../components/Community/CommunityPostList";

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
    <>
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
    </>
  );
};

export default CommunityPage;
