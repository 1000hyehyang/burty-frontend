// 📄 components/Common/Form/TextInput.tsx
import styled from "styled-components";

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--variable-collection-text-200);
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding: 0 16px;
  border: 1px solid var(--variable-collection-bg-300);
  border-radius: 10px;
  font-size: 13px;
  background-color: var(--variable-collection-bg-100);
  color: var(--variable-collection-text-100);
  outline: none;

  &:focus {
    border-color: var(--variable-collection-primary-100);
  }
`;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, value, onChange, ...props }: TextInputProps) => (
  <InputBlock>
    <Label>{label}</Label>
    <Input value={value} onChange={onChange} {...props} />
  </InputBlock>
);

export default TextInput;
