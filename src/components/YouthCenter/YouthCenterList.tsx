// 📄 components/YouthCenter/YouthCenterList.tsx
import styled from "styled-components";
import YouthCenterCard from "./YouthCenterCard";
import { dummyYouthCenters } from "../../mock/youthCenters";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: clamp(32px, 12vw, 64px);
`;

const YouthCenterList = () => {
  return (
    <>
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
