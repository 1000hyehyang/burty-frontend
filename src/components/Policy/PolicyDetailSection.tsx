// 📁 components/Policy/PolicyDetailSection.tsx
import styled from "styled-components";
import { ReactNode } from "react";
import {
  FaInfoCircle,
  FaUserAlt,
  FaFileAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Wrapper = styled.div`
  background-color: var(--bg-100, #fafafa);
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-200, #2d2d2d);
  margin-bottom: 12px;
`;

const HeaderIcon = styled.div`
  color: var(--primary-100, #50a168);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-300, #454545);
  white-space: pre-line;
`;

interface Props {
  icon?: "info" | "person" | "file" | "calendar";
  title: string;
  children: ReactNode;
}

const iconMap = {
  info: (
    <HeaderIcon>
      <FaInfoCircle size={16} />
    </HeaderIcon>
  ),
  person: (
    <HeaderIcon>
      <FaUserAlt size={16} />
    </HeaderIcon>
  ),
  file: (
    <HeaderIcon>
      <FaFileAlt size={16} />
    </HeaderIcon>
  ),
  calendar: (
    <HeaderIcon>
      <FaCalendarAlt size={16} />
    </HeaderIcon>
  ),
};

const PolicyDetailSection = ({ icon = "info", title, children }: Props) => {
  return (
    <Wrapper>
      <Header>
        {iconMap[icon]}
        {title}
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default PolicyDetailSection;
