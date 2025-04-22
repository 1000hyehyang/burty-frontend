// 📄 components/Community/CommunityFilters.tsx
import styled from "styled-components";
import Dropdown from "../Common/Dropdown";
import PrimaryButton from "../Common/PrimaryButton";
import { FaRotateLeft } from "react-icons/fa6";
import { useCommunityStore } from "../../store/useCommunityStore";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ScrollableRow = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResetWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2px;
`;

const sortOptions = ["인기순", "최신순"] as const;
const regionOptions = ["전체", "서울", "부산", "대전"] as const;
const ageOptions = ["전체", "10대", "20대", "30대"] as const;
const jobOptions = ["전체", "IT", "디자인", "마케팅"] as const;

const CommunityFilters = () => {
  const {
    sort,
    region,
    ageGroup,
    job,
    setSort,
    setRegion,
    setAgeGroup,
    setJob,
    resetFilters,
  } = useCommunityStore();

  return (
    <Wrapper>
      <ScrollableRow>
        <Dropdown<typeof sortOptions[number]>
          value={sort}
          options={[...sortOptions]}
          onChange={setSort}
        />
        <Dropdown<typeof regionOptions[number]>
          value={region}
          options={[...regionOptions]}
          onChange={setRegion}
        />
        <Dropdown<typeof ageOptions[number]>
          value={ageGroup}
          options={[...ageOptions]}
          onChange={setAgeGroup}
        />
        <Dropdown<typeof jobOptions[number]>
          value={job}
          options={[...jobOptions]}
          onChange={setJob}
        />
      </ScrollableRow>
      <ResetWrapper>
        <PrimaryButton onClick={resetFilters} size="small">
          <FaRotateLeft size={10} />
          초기화
        </PrimaryButton>
      </ResetWrapper>
    </Wrapper>
  );
};

export default CommunityFilters;
