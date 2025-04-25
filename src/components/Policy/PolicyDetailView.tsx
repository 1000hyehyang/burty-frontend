// components/Policy/PolicyDetailView.tsx
import styled from "styled-components";
import PrimaryButton from "../Common/PrimaryButton";
import StrokeButton from "../Common/StrokeButton.tsx";
import { PolicyDetail } from "../../types/policy";
import PolicyDetailSection from "./PolicyDetailSection";

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

    <PolicyDetailSection icon="info" title="지원 내용">
      {policy.supportContent}
    </PolicyDetailSection>

    <PolicyDetailSection icon="person" title="지원 대상">
      만 {policy.minAge}세 ~ {policy.maxAge}세{"\n"}
      {policy.qualification}
    </PolicyDetailSection>

    <PolicyDetailSection icon="file" title="신청 방법">
      {policy.applyMethod}
    </PolicyDetailSection>

    <PolicyDetailSection icon="file" title="심사 방법">
      {policy.selectionMethod}
    </PolicyDetailSection>

    <PolicyDetailSection icon="file" title="제출 서류">
      {policy.requiredDocuments}
    </PolicyDetailSection>

    <PolicyDetailSection icon="calendar" title="신청 기간">
      {policy.applicationPeriod}
    </PolicyDetailSection>
  </Section>
);

export default PolicyDetailView;
