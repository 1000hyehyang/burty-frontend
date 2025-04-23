// 📄 components/Common/Form/SelectInput.tsx
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import React from "react";

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

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
}

const SelectInput = ({
  label,
  options,
  placeholder = "선택하세요",
  value,
  defaultValue,
  ...props
}: SelectInputProps) => {
  return (
    <SelectBlock>
      <Label>{label}</Label>
      <SelectWrapper>
        <Select value={value} defaultValue={defaultValue} {...props}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        <IconWrapper>
          <FaChevronDown />
        </IconWrapper>
      </SelectWrapper>
    </SelectBlock>
  );
};

export default SelectInput;
