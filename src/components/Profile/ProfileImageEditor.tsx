// 📄 components/Profile/ProfileImageEditor.tsx
import styled from "styled-components";
import { FaPen } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: #222;
`;

const EditButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background-color: var(--variable-collection-primary-100);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  svg {
    font-size: 12px;
  }
`;

const ProfileImageEditor = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src="/default-profile.png" alt="프로필 이미지" />
        <EditButton>
          <FaPen />
        </EditButton>
      </ImageContainer>
    </Wrapper>
  );
};

export default ProfileImageEditor;
