// 📄 pages/EditProfilePage.tsx
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SectionTitle from "../components/Common/SectionTitle";
import TextInput from "../components/Common/Form/TextInput";
import SelectInput from "../components/Common/Form/SelectInput";
import DateInput from "../components/Common/Form/DateInput";
import PrimaryButton from "../components/Common/PrimaryButton";
import ProfileImageEditor from "../components/Profile/ProfileImageEditor";
import { useUserStore } from "../store/user/useUserStore";

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
  const {
    nickname,
    region,
    job,
    birthDate,
    setNickname,
    setRegion,
    setJob,
    setBirthDate,
  } = useUserStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("저장되었습니다!");
    navigate("/profile"); // 저장 후 마이페이지로 이동
  };

  return (
    <PageWrapper>
      <SectionTitle title="개인정보 수정" />
      <ProfileImageEditor />
      <Form onSubmit={handleSubmit}>
        <TextInput label="닉네임" value={nickname} onChange={setNickname} />
        <SelectInput
          label="지역"
          value={region}
          options={["서울특별시", "경기도", "부산광역시"]}
          onChange={setRegion}
        />
        <SelectInput
          label="직무"
          value={job}
          options={["개발자", "디자이너", "마케터"]}
          onChange={setJob}
        />
        <DateInput
          label="생년월일"
          selected={birthDate}
          onChange={setBirthDate}
        />
        <PrimaryButton fullWidth size="large">
          저장하기
        </PrimaryButton>
      </Form>
    </PageWrapper>
  );
};

export default EditProfilePage;
