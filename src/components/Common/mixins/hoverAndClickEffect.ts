// 📄 components/Common/mixins/hoverAndClickEffect.ts
import { css } from "styled-components";

const hoverAndClickEffect = css`
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(80, 161, 104, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export default hoverAndClickEffect;
