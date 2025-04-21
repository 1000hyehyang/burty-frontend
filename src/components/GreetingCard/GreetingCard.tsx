import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

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

const ProfileImage = styled.div`
  width: clamp(44px, 11vw, 52px);
  height: clamp(44px, 11vw, 52px);
  border-radius: 50%;
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
  font-size: clamp(12px, 3.2vw, 14px);
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

const GreetingCard = () => {
  return (
    <Card>
      <LeftGroup>
        <ProfileImage />
        <TextBlock>
          <Title>안녕하세요, 김버티님</Title>
          <Subtitle>김버티님에게 딱 맞는 혜택이 도착했어요! 확인해볼까요?</Subtitle>
        </TextBlock>
      </LeftGroup>
      <IconWrapper>
        <FaChevronRight />
      </IconWrapper>
    </Card>
  );
};

export default GreetingCard;
