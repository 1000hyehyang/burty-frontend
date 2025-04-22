// 📄 components/Common/StrokeButton.tsx
import styled, { css } from "styled-components";
import hoverAndClickEffect from "./mixins/hoverAndClickEffect";

interface StrokeButtonProps {
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
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

const StyledStrokeButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "fullWidth" && prop !== "size",
})<StrokeButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  background-color: var(--variable-collection-bg-100);
  color: var(--variable-collection-primary-100);
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  box-sizing: border-box;
  border: none;

  ${({ size = "medium" }) => sizeStyles[size]}
  ${hoverAndClickEffect}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    padding: 1.5px;
    background: linear-gradient(
      90deg,
      var(--variable-collection-primary-200),
      var(--variable-collection-primary-100)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  box-shadow: 0 4px 8px rgba(80, 161, 104, 0.25);
`;

const StrokeButton = ({ children, onClick, ...props }: StrokeButtonProps) => {
  return (
    <StyledStrokeButton onClick={onClick} {...props}>
      {children}
    </StyledStrokeButton>
  );
};

export default StrokeButton;
