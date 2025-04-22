// 📄 components/Policy/PolicyList.tsx
import styled from "styled-components";
import PolicyTabs from "./PolicyTabs";
import PolicyCard from "./PolicyCard";
import { usePolicyStore } from "../../store/usePolicyStore";
import { dummyPolicies } from "../../mock/policies";

type PolicyListMode = "home" | "all";

interface Props {
  mode?: PolicyListMode;
}

const Section = styled.section`
  padding: 0;
`;

const ListWrapper = styled.div`
  margin-top: clamp(16px, 4vw, 24px);
`;

const PolicyList = ({ mode = "home" }: Props) => {
  const selectedCategory = usePolicyStore((s) => s.selectedCategory);

  const filtered = dummyPolicies.filter((p) => {
    if (selectedCategory === "전체") return true;
    return p.category === selectedCategory;
  });

  const displayPolicies = mode === "home" ? filtered.slice(0, 2) : filtered;

  return (
    <Section>
      <PolicyTabs />
      <ListWrapper>
        {displayPolicies.map((policy, index) => (
          <PolicyCard key={index} {...policy} />
        ))}
      </ListWrapper>
    </Section>
  );
};

export default PolicyList;
