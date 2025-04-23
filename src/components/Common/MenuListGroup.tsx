// 📄 components/Common/MenuListGroup.tsx
import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Group = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: var(--variable-collection-bg-100);
`;

const MenuListGroup = ({ children }: Props) => {
  return <Group>{children}</Group>;
};

export default MenuListGroup;
