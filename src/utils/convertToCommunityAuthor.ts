// 📄 utils/convertToCommunityAuthor.ts
import { UserProfile } from "../types/user";
import { CommunityAuthor } from "../store/community/useCommunityStore";

export const convertToCommunityAuthor = (user: UserProfile): CommunityAuthor => {
  const currentYear = new Date().getFullYear();
  const birthYear = user.birthDate ? new Date(user.birthDate).getFullYear() : null;
  const age = birthYear ? currentYear - birthYear : null;

  const ageGroup = !age
    ? "전체"
    : age < 20
    ? "10대"
    : age < 30
    ? "20대"
    : age < 40
    ? "30대"
    : "40대 이상";

  return {
    nickname: user.nickname,
    profileImage: user.profileImage,
    region: user.region,
    job: user.job,
    ageGroup,
  };
};
