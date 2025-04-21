import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  padding: 16px;
  background-color: var(--variable-collection-bg-100);
  border-radius: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SimilarGroupCard = () => {
  return (
    <Card>
      <img src="/icons/similar-group.svg" alt="분석 아이콘" width={32} />
      <div style={{ fontWeight: 600, fontSize: "13px", marginTop: "8px" }}>
        나와 유사한 <br />
        청년 그룹 분석
      </div>
    </Card>
  );
};

export default SimilarGroupCard;
