// 📄 pages/BookmarkedPoliciesPage.tsx
import styled from "styled-components";
import SectionTitle from "../components/Common/SectionTitle";
import { dummyPolicies } from "../mock/policies";
import { useBookmarkStore } from "../store/global/useBookmarkStore";
import { selectBookmarkedPolicies } from "../utils/selectBookmarkedPolicies";
import PolicyList from "../components/Policy/PolicyList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookmarkedPoliciesPage = () => {
  const bookmarkedIds = useBookmarkStore((s) => s.bookmarkedIds);
  const bookmarked = selectBookmarkedPolicies(dummyPolicies, bookmarkedIds);

  return (
    <Wrapper>
      <SectionTitle title="찜한 정책 목록" />
      {bookmarked.length === 0 ? (
        <p>찜한 정책이 없습니다.</p>
      ) : (
        <PolicyList policies={bookmarked} />
      )}
    </Wrapper>
  );
};

export default BookmarkedPoliciesPage;
