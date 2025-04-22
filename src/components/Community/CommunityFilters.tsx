// 📄 components/Community/CommunityFilters.tsx
import styled from "styled-components";
import Dropdown from "../Common/Dropdown";
import PrimaryButton from "../Common/PrimaryButton";
import { FaRotateLeft } from "react-icons/fa6";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: clamp(8px, 2vw, 12px);
`;

const ScrollableRow = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const ResetWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2px;
`;

interface Props {
  sort: string;
  region: string;
  ageGroup: string;
  job: string;
  setSort: (v: string) => void;
  setRegion: (v: string) => void;
  setAgeGroup: (v: string) => void;
  setJob: (v: string) => void;
  onReset: () => void;
}

const CommunityFilters = ({
  sort,
  region,
  ageGroup,
  job,
  setSort,
  setRegion,
  setAgeGroup,
  setJob,
  onReset,
}: Props) => {
  return (
    <Wrapper>
      <ScrollableRow>
        <Dropdown value={sort} options={["인기순", "최신순"]} onChange={setSort} />
        <Dropdown value={region} options={["지역", "서울", "부산", "대전"]} onChange={setRegion} />
        <Dropdown value={ageGroup} options={["연령대", "10대", "20대", "30대"]} onChange={setAgeGroup} />
        <Dropdown value={job} options={["직무", "IT", "디자인", "마케팅"]} onChange={setJob} />
      </ScrollableRow>

      <ResetWrapper>
        <PrimaryButton onClick={onReset} size="small">
          <FaRotateLeft size={10} />
          초기화
        </PrimaryButton>
      </ResetWrapper>
    </Wrapper>
  );
};

export default CommunityFilters;
