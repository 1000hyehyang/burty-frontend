// 📄 components/Layout/AppContainer.tsx
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 375px;
  max-width: 400px;
  background-color: var(--variable-collection-bg-200);
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InnerContainer = styled.div`
  margin-top: clamp(12px, 3vw, 20px);
  padding: 0 20px;
  padding-bottom: clamp(80px, 15vw, 96px);
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 4vw, 24px);
`;

export default AppContainer;
