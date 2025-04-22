// 📄 components/Policy/PolicyList.tsx
import styled from "styled-components";
import PolicyCard from "./PolicyCard";
import PolicyTabs from "./PolicyTabs";
import { dummyPolicies } from "../../mock/policies";

const Section = styled.section`
  padding: 0;
`;

const ListWrapper = styled.div`
  margin-top: clamp(16px, 4vw, 24px);
`;

const PolicyList = () => {

  return (
    <Section>
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
