// 📄 components/Common/Dropdown.tsx
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface DropdownProps<T extends string> {
  value: T;
  options: T[];
  onChange: (value: T) => void;
}

const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const Button = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  background-color: ${({ $active }) =>
    $active ? "#8fbc8f1a" : "var(--variable-collection-bg-100)"};
  color: ${({ $active }) =>
    $active ? "var(--variable-collection-accent-200)" : "var(--variable-collection-text-300)"};
  border: 1px solid
    ${({ $active }) =>
      $active ? "var(--variable-collection-accent-100)" : "var(--variable-collection-bg-300)"};

  svg {
    font-size: 16px;
    color: ${({ $active }) =>
      $active ? "var(--variable-collection-accent-200)" : "#b0b0b0"};
  }
`;

const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  z-index: 100;
  width: max-content;
`;

const ListItem = styled.li`
  padding: 8px 14px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: #f6f6f6;
  }
`;

function Dropdown<T extends string>({
  value,
  options,
  onChange,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const defaultValue = options[0];
  const isActive = value !== defaultValue;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Button onClick={() => setOpen((prev) => !prev)} $active={isActive}>
        {value}
        <MdArrowDropDown />
      </Button>
      {open && (
        <List>
          {options.map((opt) => (
            <ListItem key={opt} onClick={() => {
              onChange(opt);
              setOpen(false);
            }}>
              {opt}
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
}

export default Dropdown;
