// 📁 components/Policy/PolicyList.tsx
import styled from "styled-components";
import PolicyTabs from "./PolicyTabs";
import PolicyCard from "./PolicyCard";
import { Policy } from "../../types/policy";
import { usePolicyStore } from "../../store/policy/usePolicyStore";

interface Props {
  policies: Policy[];
  showTabs?: boolean;
  limit?: number;
}

const Section = styled.section`
  padding: 0;
`;

const ListWrapper = styled.div`
  margin-top: clamp(16px, 4vw, 24px);
`;

const PolicyList = ({ policies, showTabs = false, limit }: Props) => {
  const selectedCategory = usePolicyStore((s) => s.selectedCategory);

  const filtered = policies.filter((p) => {
    if (selectedCategory === "전체") return true;
    return p.category === selectedCategory;
  });

  const display = limit ? filtered.slice(0, limit) : filtered;

  return (
    <Section>
      {showTabs && <PolicyTabs />}
      <ListWrapper>
        {display.map((policy) => (
          <PolicyCard key={policy.id} {...policy} />
        ))}
      </ListWrapper>
    </Section>
  );
};

export default PolicyList;
