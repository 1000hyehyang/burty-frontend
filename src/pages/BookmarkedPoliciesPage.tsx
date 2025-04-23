// 📄 pages/BookmarkedPoliciesPage.tsx
import styled from "styled-components";
import { dummyPolicies } from "../mock/policies";
import { useBookmarkStore } from "../store/useBookmarkStore";
import PolicyCard from "../components/Policy/PolicyCard";
import SectionTitle from "../components/Common/SectionTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BookmarkedPoliciesPage = () => {
  const bookmarkedIds = useBookmarkStore((state) => state.bookmarkedIds);

  const bookmarkedPolicies = dummyPolicies.filter((p) =>
    bookmarkedIds.includes(p.id)
  );

  return (
    <Wrapper>
      <SectionTitle title="찜한 정책 목록" />
      {bookmarkedPolicies.length === 0 ? (
        <p>찜한 정책이 없습니다.</p>
      ) : (
        bookmarkedPolicies.map((policy) => (
          <PolicyCard key={policy.id} {...policy} />
        ))
      )}
    </Wrapper>
  );
};

export default BookmarkedPoliciesPage;
