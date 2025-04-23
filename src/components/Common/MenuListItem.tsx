// 📄 components/Common/MenuListItem.tsx
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

const Item = styled.button`
  display: flex;
  box-sizing: border-box; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  background-color: var(--variable-collection-bg-100);
  border: none;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--variable-collection-bg-200);
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: var(--variable-collection-text-100);
`;

const IconRight = styled(FaChevronRight)`
  color: var(--variable-collection-text-300);
  font-size: 12px;
`;

const MenuListItem = ({ icon, label, onClick }: Props) => {
  return (
    <Item onClick={onClick}>
      <LeftGroup>
        {icon}
        <Label>{label}</Label>
      </LeftGroup>
      <IconRight />
    </Item>
  );
};

export default MenuListItem;
