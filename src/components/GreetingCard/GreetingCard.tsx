// 📄 components/GreetingCard.tsx
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

interface GreetingCardProps {
  username: string;
  subtitle: string;
  profileImage?: string;
}

const Card = styled.div`
  background-color: var(--variable-collection-bg-100);
  border-radius: clamp(16px, 4vw, 24px);
  padding: clamp(12px, 3.5vw, 16px) clamp(16px, 4vw, 20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 4vw, 16px);
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(12px, 4vw, 16px);
  flex: 1;
`;

const ProfileImage = styled.img`
  width: clamp(44px, 11vw, 52px);
  height: clamp(44px, 11vw, 52px);
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(4px, 1vw, 6px);
`;

const Title = styled.div`
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
  line-height: 1.4;
`;

const Subtitle = styled.div`
  font-size: clamp(10px, 3vw, 12px);
  font-weight: 500;
  color: var(--variable-collection-text-300);
  line-height: 1.4;
`;

const IconWrapper = styled.div`
  color: var(--variable-collection-text-200);
  font-size: clamp(16px, 4vw, 18px);
  align-self: center;
  display: flex;
  align-items: center;
`;

const GreetingCard = ({
  username,
  subtitle,
  profileImage = "/default-profile.png",
}: GreetingCardProps) => {
  return (
    <Card>
      <LeftGroup>
        <ProfileImage src={profileImage} alt={`${username} 프로필 이미지`} />
        <TextBlock>
          <Title>안녕하세요, {username}님</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextBlock>
      </LeftGroup>
      <IconWrapper>
        <FaChevronRight />
      </IconWrapper>
    </Card>
  );
};

export default GreetingCard;
