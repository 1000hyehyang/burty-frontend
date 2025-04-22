// 📄 components/YouthCenter/YouthCenterList.tsx
import styled from "styled-components";
import YouthCenterCard from "./YouthCenterCard";
import { dummyYouthCenters } from "../../mock/youthCenters";

const Title = styled.h2`
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
  margin: 0;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: clamp(32px, 12vw, 64px);
`;

const YouthCenterList = () => {
  return (
    <>
      <Title>청년 센터 목록</Title>
      <ListWrapper>
        {dummyYouthCenters.map((center, index) => (
          <YouthCenterCard
            key={index}
            region={center.region}
            name={center.name}
            address={center.address}
            openingHours={center.openingHours}
          />
        ))}
      </ListWrapper>
    </>
  );
};

export default YouthCenterList;
