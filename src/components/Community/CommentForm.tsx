// 📄 components/Community/CommentForm.tsx
import styled from "styled-components";
import PrimaryButton from "../Common/PrimaryButton";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  margin-top: -16px;
`;

const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #333;
  object-fit: cover;
  flex-shrink: 0;
`;

const InputSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 12px;
  color: var(--variable-collection-text-300);
  border: none;
  border-bottom: 1.5px solid #aaa;
  background: transparent;
  outline: none;

  &:focus {
    border-bottom: 1.5px solid var(--variable-collection-accent-100);
    }

  &::placeholder {
    color: #aaa;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CommentForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    console.log("댓글 작성:", text);
    setText("");
  };

  return (
    <Wrapper>
      <Profile src="/default-profile.png" />
      <InputSection>
        <Input
          placeholder="댓글을 입력하세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonBox>
          <PrimaryButton onClick={handleSubmit} size="small">
            댓글 작성하기
          </PrimaryButton>
        </ButtonBox>
      </InputSection>
    </Wrapper>
  );
};

export default CommentForm;

