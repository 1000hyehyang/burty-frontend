// 📄 components/Common/IconCard.tsx
import styled from "styled-components";
import hoverAndClickEffect from "../Common/mixins/hoverAndClickEffect";

interface IconCardProps {
  text: string;
  iconSrc: string;
  alt?: string;
  onClick?: () => void;
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  aspect-ratio: 170 / 70;
  border-radius: 15px;
  background: linear-gradient(
    179deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(143, 188, 143, 0.07) 100%
  );
  background-color: var(--variable-collection-bg-100);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  gap: 4px;
  padding: 8px 16px;
  overflow: hidden;
  ${hoverAndClickEffect}
`;

const Text = styled.div`
  font-size: clamp(10px, 2vw, 12px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
  line-height: 1.45;
  white-space: pre-wrap;
  max-width: 60%;
`;

const Icon = styled.img`
  width: 56px;
  height: auto;
  flex-shrink: 0;
`;

const IconCard = ({ text, iconSrc, alt = "", onClick }: IconCardProps) => (
  <Card onClick={onClick}>
    <Text dangerouslySetInnerHTML={{ __html: text }} />
    <Icon src={iconSrc} alt={alt} />
  </Card>
);

export default IconCard;
