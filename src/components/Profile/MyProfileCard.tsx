// 📄 components/Profile/MyProfileCard.tsx
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useUserStore } from "../../store/useUserStore";

const Card = styled.div`
  background-color: var(--variable-collection-bg-100);
  border-radius: clamp(16px, 4vw, 24px);
  padding: clamp(12px, 3.5vw, 16px) clamp(16px, 4vw, 20px);
  display: flex;
  align-items: center;
  gap: clamp(12px, 4vw, 16px);
`;

const ProfileImage = styled.img`
  width: clamp(36px, 10vw, 48px);
  height: clamp(36px, 10vw, 48px);
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(4px, 1vw, 6px);
`;

const Name = styled.div`
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
  line-height: 1.4;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: clamp(10px, 3vw, 12px);
  color: var(--variable-collection-text-300);
  gap: 4px;
`;

const Age = styled.div`
  font-size: clamp(10px, 3vw, 12px);
  color: var(--variable-collection-text-300);
`;

const MyProfileCard = () => {
  const { nickname, region, birthDate, profileImage } = useUserStore();

  const age = birthDate
    ? new Date().getFullYear() - birthDate.getFullYear()
    : "-";

  return (
    <Card>
      <ProfileImage src={profileImage} alt={`${nickname} 프로필 이미지`} />
      <Info>
        <Name>{nickname}</Name>
        <Location>
          <FaMapMarkerAlt size={12} />
          {region}
        </Location>
        <Age>{`${age}세 (${birthDate?.getFullYear()}년생)`}</Age>
      </Info>
    </Card>
  );
};

export default MyProfileCard;
