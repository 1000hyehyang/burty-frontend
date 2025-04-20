// 📄 components/Policy/PolicyList.tsx
import styled from "styled-components";
import PolicyCard from "./PolicyCard";
import PolicyTabs from "./PolicyTabs";

const Section = styled.section`
  padding: 0 clamp(16px, 4vw, 20px);
  margin-top: clamp(24px, 5vw, 32px);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(12px, 3vw, 16px);
`;

const Title = styled.h2`
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 700;
  color: var(--variable-collection-text-100);
`;

const More = styled.button`
  font-size: clamp(12px, 3vw, 13px);
  font-weight: 500;
  color: var(--variable-collection-primary-100);
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: ">";
    font-weight: 500;
    font-size: inherit;
  }
`;

const ListWrapper = styled.div`
  margin-top: clamp(16px, 4vw, 24px);
`;

const PolicyList = () => {
  return (
    <Section>
      <Header>
        <Title>청년 정책 혜택</Title>
        <More>더보기</More>
      </Header>

      <PolicyTabs />

      <ListWrapper>
        <PolicyCard
          category="취업"
          title="청년 전입 지원금"
          description="미취업 청년의 구직활동 지원을 위한 지원금 사업입니다."
          dateRange="2025.04.17 ~ 2025.04.30"
          dday="D-7"
        />
        <PolicyCard
          category="창업"
          title="청년 창업 지원금"
          description="청년 창업가의 창업 활동을 지원하는 사업입니다."
          dateRange="2024.04.17 ~ 2024.04.30"
          dday="마감"
          isClosed
        />
      </ListWrapper>
    </Section>
  );
};

export default PolicyList;
