// 📄 components/Common/SectionTitle.tsx
import { ReactNode } from "react";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

interface SectionTitleProps {
  title: ReactNode;
  showMoreButton?: boolean;
  onClickMore?: () => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(-12px, -3vw, -14px);
`;

const TitleText = styled.h2`
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
`;

const MoreButton = styled.button`
  font-size: clamp(12px, 3vw, 13px);
  font-weight: 500;
  color: var(--variable-collection-primary-100);
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SectionTitle = ({ title, showMoreButton, onClickMore }: SectionTitleProps) => {
  return (
    <Wrapper>
      <TitleText>{title}</TitleText>
      {showMoreButton && (
        <MoreButton onClick={onClickMore}>
          더보기 <FaChevronRight size={12} />
        </MoreButton>
      )}
    </Wrapper>
  );
};

export default SectionTitle;
