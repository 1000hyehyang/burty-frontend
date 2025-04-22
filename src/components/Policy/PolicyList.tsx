// 📄 components/Policy/PolicyList.tsx
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PolicyCard from "./PolicyCard";
import PolicyTabs from "./PolicyTabs";
import { FaChevronRight } from "react-icons/fa";
import { dummyPolicies } from "../../mock/policies";

interface PolicyListProps {
  showMoreButton?: boolean; // 기본값 false로
}

const Section = styled.section`
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(12px, 3vw, 16px);
`;

const Title = styled.h2`
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
`;

const More = styled.button`
  font-size: clamp(12px, 3vw, 13px);
  font-weight: 500;
  color: var(--variable-collection-primary-100);
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ListWrapper = styled.div`
  margin-top: clamp(16px, 4vw, 24px);
`;

const PolicyList = ({ showMoreButton = false }: PolicyListProps) => {
  const navigate = useNavigate();

  return (
    <Section>
      <Header>
        <Title>청년 정책 혜택</Title>
        {showMoreButton && (
          <More onClick={() => navigate("/settlement/policy")}>
            더보기 <FaChevronRight size={12} />
          </More>
        )}
      </Header>

      <PolicyTabs />

      <ListWrapper>
        {dummyPolicies.map((policy, index) => (
          <PolicyCard
            key={index}
            category={policy.category}
            title={policy.title}
            description={policy.description}
            dateRange={policy.dateRange}
            dday={policy.dday}
            isClosed={policy.isClosed}
          />
        ))}
      </ListWrapper>
    </Section>
  );
};


export default PolicyList;
