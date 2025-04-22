// 📄 components/Common/PrimaryButton.tsx
import styled from "styled-components";
import hoverAndClickEffect from "./mixins/hoverAndClickEffect";

interface PrimaryButtonProps {
  fullWidth?: boolean;
}

const PrimaryButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "fullWidth",
})<PrimaryButtonProps>`
  box-sizing: border-box;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  padding: 12px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 12px;
  font-weight: 600;
  color: var(--variable-collection-bg-100);

  background: linear-gradient(
    90deg,
    var(--variable-collection-primary-200),
    var(--variable-collection-primary-100)
  );
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(80, 161, 104, 0.25);
  transition: opacity 0.2s;

  ${hoverAndClickEffect}

  svg {
    font-size: 16px;
  }
`;

export default PrimaryButton;
