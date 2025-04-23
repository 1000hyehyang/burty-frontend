// 📄 pages/EditProfilePage.tsx
import { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/Common/SectionTitle";
import TextInput from "../components/Common/Form/TextInput";
import SelectInput from "../components/Common/Form/SelectInput";
import PrimaryButton from "../components/Common/PrimaryButton";
import ProfileImageEditor from "../components/Profile/ProfileImageEditor";

const PageWrapper = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  background-color: var(--variable-collection-bg-100);
  border-radius: 10px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EditProfilePage = () => {
  const [nickname, setNickname] = useState("김버티");
  const [region, setRegion] = useState("경기도");
  const [job, setJob] = useState("개발자");
  const [birthDate, setBirthDate] = useState("1992.11.20");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출 또는 상태 저장
    console.log({ nickname, region, job, birthDate });
    alert("저장 완료!");
  };

  return (
    <PageWrapper>
      <SectionTitle title="개인정보 수정" />
      <ProfileImageEditor />
      <Form onSubmit={handleSubmit}>
        <TextInput
          label="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <SelectInput
          label="지역"
          options={["서울특별시", "경기도", "부산광역시"]}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <SelectInput
          label="직무"
          options={["개발자", "디자이너", "마케터"]}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <TextInput
          label="생년월일"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <PrimaryButton fullWidth size="large" type="submit">
          저장하기
        </PrimaryButton>
      </Form>
    </PageWrapper>
  );
};

export default EditProfilePage;
