// 📄 components/Profile/MyBookmarkedPolicyList.tsx
import styled from "styled-components";
import PolicyCard from "../Policy/PolicyCard";
import { dummyPolicies } from "../../mock/policies";
import { useBookmarkStore } from "../../store/useBookmarkStore";

const ListWrapper = styled.div`
  margin-top: clamp(16px, 4vw, 24px);
`;

const MyBookmarkedPolicyList = () => {
  const bookmarkedIds = useBookmarkStore((state) => state.bookmarkedIds);

  const bookmarkedPolicies = dummyPolicies
    .filter((p) => bookmarkedIds.includes(p.id))
    .slice(0, 2); // 마이페이지용: 최대 2개만

  return (
    <ListWrapper>
      {bookmarkedPolicies.length === 0 ? (
        <p>찜한 정책이 없습니다.</p>
      ) : (
        bookmarkedPolicies.map((policy) => (
          <PolicyCard key={policy.id} {...policy} showBookmarkIcon={false} />
        ))
      )}
    </ListWrapper>
  );
};

export default MyBookmarkedPolicyList;
