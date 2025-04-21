// 📄 components/Settlement/SettlementQuickAccess.tsx
import styled from "styled-components";
import KeywordSearchCard from "./KeywordSearchCard";
import SimilarGroupCard from "./SimilarGroupCard";

const Row = styled.div`
  display: flex;
  gap: 12px;
`;

const SettlementQuickAccess = () => {
  return (
    <Row>
      <KeywordSearchCard />
      <SimilarGroupCard />
    </Row>
  );
};

export default SettlementQuickAccess;
