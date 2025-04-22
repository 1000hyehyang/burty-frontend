// 📄 components/YouthCenter/YouthCenterCard.tsx
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import Badge from "../Common/Badge";

interface YouthCenterCardProps {
  region: string;
  name: string;
  address: string;
  openingHours: string;
}

const Card = styled.div`
  background-color: var(--variable-collection-bg-100);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--variable-collection-text-100);
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AddressText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--variable-collection-text-300);
  white-space: nowrap;
`;

const HoursRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 500;
  color: var(--variable-collection-text-300);
  white-space: nowrap;
`;

const YouthCenterCard = ({
  region,
  name,
  address,
  openingHours,
}: YouthCenterCardProps) => {
  return (
    <Card>
      <Badge type="primary" size="small">
        {region}
      </Badge>

      <TopRow>
        <Name>{name}</Name>
      </TopRow>

      <AddressRow>
        <MdLocationOn size={16} color="var(--variable-collection-text-300)" />
        <AddressText>{address}</AddressText>
      </AddressRow>

      <HoursRow>
        <span>운영시간</span>
        <span>|</span>
        <span>{openingHours}</span>
      </HoursRow>
    </Card>
  );
};

export default YouthCenterCard;
