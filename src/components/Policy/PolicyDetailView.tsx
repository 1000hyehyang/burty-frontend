// components/Policy/PolicyDetailView.tsx
import styled from "styled-components";
import PrimaryButton from "../Common/PrimaryButton";
import StrokeButton from "../Common/StrokeButton.tsx";
import { PolicyDetail } from "../../types/policy";

const Section = styled.section`
  padding: 20px 16px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin: 24px 0 8px;
`;

const Content = styled.p`
  font-size: 13px;
  color: var(--variable-collection-text-300);
  white-space: pre-line;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const PolicyDetailView = ({ policy }: { policy: PolicyDetail }) => (
  <Section>
    <Title>{policy.name}</Title>
    <Description>{policy.description}</Description>
    <ButtonBox>
      <StrokeButton onClick={() => history.back()}>뒤로가기</StrokeButton>
      <PrimaryButton onClick={() => window.open(policy.applyUrl)}>
        신청하러 가기
      </PrimaryButton>
    </ButtonBox>

    <SectionTitle>지원 내용</SectionTitle>
    <Content>{policy.supportContent}</Content>

    <SectionTitle>지원 대상</SectionTitle>
    <Content>
      만 {policy.minAge}세 ~ {policy.maxAge}세  
      {"\n"}{policy.qualification}
    </Content>

    <SectionTitle>신청 방법</SectionTitle>
    <Content>{policy.applyMethod}</Content>

    <SectionTitle>심사 방법</SectionTitle>
    <Content>{policy.selectionMethod}</Content>

    <SectionTitle>제출 서류</SectionTitle>
    <Content>{policy.requiredDocuments}</Content>

    <SectionTitle>신청 기간</SectionTitle>
    <Content>{policy.applicationPeriod}</Content>
  </Section>
);

export default PolicyDetailView;
