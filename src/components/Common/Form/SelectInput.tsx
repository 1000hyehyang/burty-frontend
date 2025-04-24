// 📄 components/Common/Form/SelectInput.tsx
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--variable-collection-text-200);
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  height: 44px;
  padding: 0 40px 0 16px;
  border: 1px solid var(--variable-collection-bg-300);
  border-radius: 10px;
  font-size: 12px;
  appearance: none;
  background-color: var(--variable-collection-bg-100);
  color: var(--variable-collection-text-100);

  &:focus {
    outline: none;
    border-color: var(--variable-collection-primary-100);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  svg {
    font-size: 12px;
    color: var(--variable-collection-text-300);
  }
`;

interface SelectInputProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const SelectInput = ({ label, value, options, onChange }: SelectInputProps) => (
  <SelectBlock>
    <Label>{label}</Label>
    <SelectWrapper>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          선택하세요
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <IconWrapper>
        <FaChevronDown />
      </IconWrapper>
    </SelectWrapper>
  </SelectBlock>
);

export default SelectInput;
