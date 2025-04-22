// 📄 components/Community/CommentForm.tsx
import styled from "styled-components";
import PrimaryButton from "../Common/PrimaryButton";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 16px 0 24px;
`;

const Profile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #d9d9d9;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--variable-collection-bg-300);
  border-radius: 12px;
  font-size: 13px;

  &::placeholder {
    color: #aaa;
  }
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
      <Input
        placeholder="댓글을 입력하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <PrimaryButton onClick={handleSubmit} size="small">댓글</PrimaryButton>
    </Wrapper>
  );
};

export default CommentForm;
