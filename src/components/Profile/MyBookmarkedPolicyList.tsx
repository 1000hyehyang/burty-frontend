// 📁 components/Profile/MyBookmarkedPolicyList.tsx
import styled from "styled-components";
import { dummyPolicies } from "../../mock/policies";
import { useBookmarkStore } from "../../store/global/useBookmarkStore";
import { selectBookmarkedPolicies } from "../../utils/selectBookmarkedPolicies";
import PolicyList from "../Policy/PolicyList";

const ListWrapper = styled.div`
  margin-top: -24px;
`;

const MyBookmarkedPolicyList = ({ limit = 2 }: { limit?: number }) => {
  const bookmarkedIds = useBookmarkStore((s) => s.bookmarkedIds);
  const bookmarked = selectBookmarkedPolicies(dummyPolicies, bookmarkedIds);

  return (
    <ListWrapper>
      {bookmarked.length === 0 ? (
        <p>찜한 정책이 없습니다.</p>
      ) : (
        <PolicyList policies={bookmarked} limit={limit} />
      )}
    </ListWrapper>
  );
};

export default MyBookmarkedPolicyList;
