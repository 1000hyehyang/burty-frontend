// 📄 components/YouthCenter/YouthCenterList.tsx
import styled from "styled-components";
import YouthCenterCard from "./YouthCenterCard";

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
  margin-bottom: clamp(64px, 8vw, 80px);
`;

const dummyData = [
  {
    region: "충청북도 옥천군",
    name: "청년이랑",
    address: "충북옥천군 옥천읍중앙로73",
    openingHours: "평일(10:00~21:00) 토요일(10:00~17:00)",
  },
  {
    region: "충청북도 옥천군",
    name: "청년내일센터",
    address: "충북옥천군 옥천읍하나로길 123",
    openingHours: "평일(09:00~18:00)",
  },
];

const YouthCenterList = () => {
  return (
    <>
      <Title>청년 센터 목록</Title>
      <ListWrapper>
        {dummyData.map((center, index) => (
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
