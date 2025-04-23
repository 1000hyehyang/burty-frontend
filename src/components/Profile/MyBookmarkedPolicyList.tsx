// 📄 components/Profile/MyBookmarkedPolicyList.tsx
import styled from "styled-components";
import PolicyCard from "../Policy/PolicyCard";
import { dummyPolicies } from "../../mock/policies";
import { useBookmarkStore } from "../../store/useBookmarkStore";

interface Props {
  expanded?: boolean; // 더보기 여부
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmptyMessage = styled.p`
  font-size: 13px;
  color: var(--variable-collection-text-300);
`;

const MyBookmarkedPolicyList = ({ expanded = false }: Props) => {
  const bookmarkedIds = useBookmarkStore((state) => state.bookmarkedIds);

  const bookmarkedPolicies = dummyPolicies.filter((p) =>
    bookmarkedIds.includes(p.id)
  );

  const displayed = expanded
    ? bookmarkedPolicies
    : bookmarkedPolicies.slice(0, 2); // 마이페이지에서는 2개 제한

  return (
    <ListWrapper>
      {displayed.length === 0 ? (
        <EmptyMessage>찜한 정책이 없습니다.</EmptyMessage>
      ) : (
        displayed.map((policy) => (
          <PolicyCard key={policy.id} {...policy} />
        ))
      )}
    </ListWrapper>
  );
};

export default MyBookmarkedPolicyList; 
