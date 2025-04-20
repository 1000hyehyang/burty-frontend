// 📄 components/Policy/PolicyTabs.tsx
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: var(--variable-collection-bg-300);
  border-radius: 10px;
  margin: 0 20px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px 0;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  border-radius: 10px;
  background-color: ${({ active }) =>
    active ? "var(--variable-collection-bg-100)" : "transparent"};
  color: var(--variable-collection-text-200);
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ active }) =>
      active ? "var(--variable-collection-bg-100)" : "rgba(255,255,255,0.3)"};
  }
`;

const categories = ["전체", "일자리", "주거", "교육", "복지"];

const PolicyTabs = () => {
  const [selected, setSelected] = useState("전체");

  return (
    <Container>
      {categories.map((cat) => (
        <Tab
          key={cat}
          active={selected === cat}
          onClick={() => setSelected(cat)}
        >
          {cat}
        </Tab>
      ))}
    </Container>
  );
};

export default PolicyTabs;
