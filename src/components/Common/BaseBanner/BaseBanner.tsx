// 📄 components/Common/BaseBanner/BaseBanner.tsx
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";

interface BaseBannerProps {
  iconSrc: string;
  iconAlt: string;
  title: React.ReactNode;
  subtitle?: string;
  buttonText: string;
  onClick?: () => void;
}

const Banner = styled.section`
  background: linear-gradient(
    250deg,
    rgba(80, 161, 104, 0.1) 0%,
    rgba(97, 188, 132, 0.1) 3%,
    rgba(250, 250, 250, 0.1) 100%
  );
  background-color: var(--variable-collection-bg-100);
  border-radius: 20px;
  padding: 24px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
`;

const Image = styled.img`
  width: 90px;
  height: auto;
  margin-bottom: 2px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
  color: var(--variable-collection-text-100);
  line-height: 1.35;

  span {
    color: var(--variable-collection-accent-100);
  }
`;

const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-family: "Pretendard", sans-serif;
  color: var(--variable-collection-text-300);
  margin-top: -8px;
`;

const BaseBanner = ({
  iconSrc,
  iconAlt,
  title,
  subtitle,
  buttonText,
  onClick,
}: BaseBannerProps) => {
  return (
    <Banner>
      <Image src={iconSrc} alt={iconAlt} />
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <PrimaryButton onClick={onClick}>{buttonText}</PrimaryButton>
    </Banner>
  );
};

export default BaseBanner;
