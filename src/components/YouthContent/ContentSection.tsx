// 📁 components/YouthContent/ContentSection.tsx
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px 20px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-300, #454545);
  white-space: pre-line;
`;

interface Props {
  content: string;
}

const ContentSection = ({ content }: Props) => <Wrapper>{content}</Wrapper>;

export default ContentSection;