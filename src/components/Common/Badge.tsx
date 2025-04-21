// 📄 components/Common/Badge.tsx
import styled from "styled-components";

interface BadgeProps {
  type?: "default" | "primary" | "positive" | "gray";
  size?: "small" | "medium"; // ✅ 크기 확장
}

const getBadgeStyles = (type: BadgeProps["type"]) => {
  switch (type) {
    case "primary":
      return {
        bg: "rgba(143, 188, 143, 0.1)",
        color: "var(--variable-collection-primary-100)",
      };
    case "positive":
      return {
        bg: "var(--variable-collection-action-positive-bg)",
        color: "var(--variable-collection-action-positive)",
      };
    case "gray":
      return {
        bg: "var(--variable-collection-bg-200)",
        color: "#aaa",
      };
    default:
      return {
        bg: "#eee",
        color: "#444",
      };
  }
};

const getBadgeSize = (size: BadgeProps["size"]) => {
  if (size === "small") {
    return {
      font: "clamp(8px, 2vw, 10px)",
      padding: "2px 6px",
      radius: "10px",
    };
  }
  return {
    font: "clamp(10px, 2.5vw, 12px)",
    padding: "4px 10px",
    radius: "20px",
  };
};

const Badge = styled.span<BadgeProps>`
  font-size: ${({ size }) => getBadgeSize(size).font};
  font-weight: 600;
  padding: ${({ size }) => getBadgeSize(size).padding};
  border-radius: ${({ size }) => getBadgeSize(size).radius};
  background-color: ${({ type }) => getBadgeStyles(type).bg};
  color: ${({ type }) => getBadgeStyles(type).color};
`;

Badge.defaultProps = {
  type: "default",
  size: "medium",
};

export default Badge;
