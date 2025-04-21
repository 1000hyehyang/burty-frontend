import styled from "styled-components";

const PrimaryButton = styled.button`
  margin-top: 4px;
  padding: 12px 0;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
  color: var(--variable-collection-bg-100);
  background: linear-gradient(
    90deg,
    var(--variable-collection-primary-200),
    var(--variable-collection-primary-100)
  );
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(80, 161, 104, 0.25);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export default PrimaryButton;
