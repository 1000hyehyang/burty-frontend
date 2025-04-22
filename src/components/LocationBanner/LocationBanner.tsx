import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import PrimaryButton from "../Common/PrimaryButton";

interface LocationBannerProps {
  location: string;
  onChangeLocation?: () => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--variable-collection-bg-100);
  border-radius: 15px;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: var(--variable-collection-text-300);
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LocationName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--variable-collection-text-100);
`;

const LocationBanner = ({ location, onChangeLocation }: LocationBannerProps) => {
  return (
    <Wrapper>
      <TextGroup>
        <Label>현재 탐색 지역</Label>
        <LocationInfo>
          <MdLocationOn size={20} color="var(--variable-collection-text-100)" />
          <LocationName>{location}</LocationName>
        </LocationInfo>
      </TextGroup>

      <PrimaryButton onClick={onChangeLocation}>
        <MdMyLocation />
        위치 변경
      </PrimaryButton>
    </Wrapper>
  );
};

export default LocationBanner;

