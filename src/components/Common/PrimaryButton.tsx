// 📄 components/Common/PrimaryButton.tsx
import styled, { css } from "styled-components";
import hoverAndClickEffect from "./mixins/hoverAndClickEffect";

interface PrimaryButtonProps {
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}

const sizeStyles = {
  small: css`
    padding: 8px 12px;
    font-size: 10px;
    border-radius: 10px;

    svg {
      font-size: 14px;
    }
  `,
  medium: css`
    padding: 12px 20px;
    font-size: 12px;
    border-radius: 12px;

    svg {
      font-size: 16px;
    }
  `,
  large: css`
    padding: 14px 24px;
    font-size: 14px;
    border-radius: 14px;

    svg {
      font-size: 18px;
    }
  `,
};

const PrimaryButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "fullWidth" && prop !== "size",
})<PrimaryButtonProps>`
  box-sizing: border-box;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  color: var(--variable-collection-bg-100);

  background: linear-gradient(
    90deg,
    var(--variable-collection-primary-200),
    var(--variable-collection-primary-100)
  );
  box-shadow: 0 4px 8px rgba(80, 161, 104, 0.25);
  transition: opacity 0.2s;

  ${({ size = "medium" }) => sizeStyles[size]}
  ${hoverAndClickEffect}
`;

export default PrimaryButton;
