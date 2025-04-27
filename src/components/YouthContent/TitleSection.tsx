// 📁 components/YouthContent/TitleSection.tsx
import styled from "styled-components";
import Badge from "../Common/Badge";

const Wrapper = styled.div`
  padding: 16px 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
`;

const Date = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
`;

interface Props {
  category: string;
  title: string;
  date: string;
}

const TitleSection = ({ category, title, date }: Props) => (
  <Wrapper>
    <Badge type="primary">{category}</Badge>
    <Title>{title}</Title>
    <Date>작성일 | {date}</Date>
  </Wrapper>
);

export default TitleSection;