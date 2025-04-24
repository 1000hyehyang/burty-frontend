// 📄 mock/dummyCommunityComments.ts
import { CommunityComment } from "../store/community/useCommunityStore";

export const dummyCommunityComments: CommunityComment[] = [
  {
    commentId: 0,
    postId: 0,
    author: {
      nickname: "롯데우승",
      ageGroup: "30대",
      region: "부산",
      job: "영업",
    },
    content: "부산은 야경도 좋고 바다도 있어서 진짜 최고예요.",
    createdAt: "2025-04-22T13:00:00Z",
    likes: 10,
  },
  {
    commentId: 1,
    postId: 0,
    author: {
      nickname: "낭만청년",
      ageGroup: "20대",
      region: "경주",
      job: "디자인",
    },
    content: "도시보단 이렇게 한적한 분위기가 제 스타일입니다!",
    createdAt: "2025-04-22T13:03:00Z",
    likes: 8,
  },
  {
    commentId: 2,
    postId: 1,
    author: {
      nickname: "대전토박이",
      ageGroup: "40대",
      region: "대전",
      job: "행정",
    },
    content: "대전은 교통 편하고 공공시설도 잘 돼 있어서 살기 좋습니다.",
    createdAt: "2025-04-21T18:45:00Z",
    likes: 4,
  },
  {
    commentId: 3,
    postId: 1,
    author: {
      nickname: "디자인하는사람",
      ageGroup: "30대",
      region: "서울",
      job: "디자인",
    },
    content: "서울은 빠르지만, 영감 얻기엔 아직도 좋은 도시 같아요.",
    createdAt: "2025-04-21T19:01:00Z",
    likes: 3,
  },
  {
    commentId: 4,
    postId: 2,
    author: {
      nickname: "춘천닭갈비",
      ageGroup: "50대",
      region: "춘천",
      job: "교육",
    },
    content: "퇴직 후 정착했는데 산책길이 너무 좋아요.",
    createdAt: "2025-04-20T14:22:00Z",
    likes: 6,
  },
  {
    commentId: 5,
    postId: 2,
    author: {
      nickname: "춘천러버",
      ageGroup: "20대",
      region: "춘천",
      job: "마케팅",
    },
    content: "카페 많은 것도 좋고 강변 산책 최고입니다~",
    createdAt: "2025-04-20T15:30:00Z",
    likes: 5,
  },
];