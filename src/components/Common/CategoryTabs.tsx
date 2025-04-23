// 📄 components/Common/CategoryTabs.tsx
import styled from "styled-components";

interface CategoryTabsProps {
  categories: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: var(--variable-collection-bg-300);
  border-radius: 10px;
  padding: 6px;
  display: flex;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 8px 0;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  background-color: ${({ $active }) =>
    $active ? "var(--variable-collection-bg-100)" : "transparent"};
  border-radius: 5px;
  color: ${({ $active }) =>
    $active
      ? "var(--variable-collection-text-100)"
      : "var(--variable-collection-text-300)"};
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ $active }) =>
      $active ? "var(--variable-collection-bg-100)" : "rgba(255,255,255,0.3)"};
  }
`;

const CategoryTabs = ({
  categories,
  selected,
  onSelect,
}: CategoryTabsProps) => {
  return (
    <Container>
      {categories.map((cat) => (
        <Tab key={cat} $active={selected === cat} onClick={() => onSelect(cat)}>
          {cat}
        </Tab>
      ))}
    </Container>
  );
};

export default CategoryTabs;
