// 📄 components/Settlement/KeywordSearchCard.tsx
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

const KeywordSearchCard = () => {
  return (
    <Card>
      <img src="/icons/search-keyword.svg" alt="검색 아이콘" width={32} />
      <div style={{ fontWeight: 600, fontSize: "13px", marginTop: "8px" }}>
        키워드로 한눈에 <br />
        맞춤 정책 보기
      </div>
    </Card>
  );
};

export default KeywordSearchCard;
