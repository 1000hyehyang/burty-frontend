// 📄 components/Common/SearchBar.tsx
import styled from "styled-components";
import { MdSearch, MdTune } from "react-icons/md";

interface SearchBarProps {
  placeholder?: string;
  onFilterClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--variable-collection-bg-100);
  border-radius: 12px;
  padding: 10px 12px;
  gap: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: var(--variable-collection-text-100);
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: var(--variable-collection-text-300);
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const SearchBar = ({ placeholder, onFilterClick, onChange, value }: SearchBarProps) => {
  return (
    <Container>
      <MdSearch size={20} color="var(--variable-collection-text-300)" />
      <Input
        placeholder={placeholder || "검색어 입력"}
        onChange={onChange}
        value={value}
      />
      <IconButton onClick={onFilterClick}>
        <MdTune />
      </IconButton>
    </Container>
  );
};

export default SearchBar;
