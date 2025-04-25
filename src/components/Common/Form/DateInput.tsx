import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--variable-collection-text-200);
`;

const StyledDateWrapper = styled.div`
  .custom-datepicker {
    width: 100%;
    height: 44px;
    padding: 0 16px;
    box-sizing: border-box;
    border: 1px solid var(--variable-collection-bg-300);
    border-radius: 10px;
    font-size: 13px;
    background-color: var(--variable-collection-bg-100);
    color: var(--variable-collection-text-100);

    &:focus {
      outline: none;
      border-color: var(--variable-collection-primary-100);
    }
  }
`;

interface DateInputProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

const DateInput = ({ label, selected, onChange }: DateInputProps) => {
  const handleChange = (date: Date | Date[] | null) => {
    if (Array.isArray(date)) return;
    onChange(date);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledDateWrapper>
        <DatePicker
          selected={selected}
          onChange={handleChange}
          dateFormat="yyyy.MM.dd"
          placeholderText="생년월일 선택"
          className="custom-datepicker"
        />
      </StyledDateWrapper>
    </Wrapper>
  );
};

export default DateInput;
