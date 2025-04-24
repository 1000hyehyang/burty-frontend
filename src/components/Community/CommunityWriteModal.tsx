import styled from "styled-components";
import PrimaryButton from "../Common/PrimaryButton";
import StrokeButton from "../Common/StrokeButton.tsx";
import { useState, useEffect } from "react";
import { useModalStore } from "../../store/global/useModalStore.ts";

const Overlay = styled.div`
  position: fixed; /* Viewport 기준으로! */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
  box-sizing: border-box;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 310px;
  background-color: white;
  padding: 20px 24px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 16px;
  color: var(--variable-collection-text-100);
  font-weight: 600;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--variable-collection-text-200);
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  border: 1.5px solid var(--variable-collection-bg-300);
  border-radius: 10px;
  resize: none;
  margin-bottom: 24px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: var(--variable-collection-text-300);
    font-family: "Pretendard", sans-serif;
  }

  &:focus {
    border-color: var(--variable-collection-primary-100);
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const CommunityWriteModal = () => {
  const [content, setContent] = useState("");
  const close = useModalStore((s) => s.close);
  const isOpen = useModalStore((s) => s.isOpen);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!content.trim()) return alert("내용을 입력해주세요!");
    console.log("작성 내용:", content);
    close();
  };

  return (
    <Overlay onClick={close}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>글쓰기</Title>
        <Label htmlFor="content">내용</Label>
        <Textarea
          id="content"
          value={content}
          placeholder="내용을 입력하세요."
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonGroup>
          <StrokeButton onClick={close}>취소하기</StrokeButton>
          <PrimaryButton onClick={handleSubmit}>글 등록하기</PrimaryButton>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
};

export default CommunityWriteModal;
