// 📄 src/mock/communityPosts.ts
export interface CommunityPost {
  postId: number;
  nickname: string;
  ageGroup: string;
  location: string;
  job: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
  createdAt: string;
}

export const dummyCommunityPosts: CommunityPost[] = [
  {
    postId: 0,
    nickname: "홍창기",
    ageGroup: "20대",
    location: "부산",
    job: "IT",
    content: "부산 해운대 정착 2년차, 바다 보며 출근하는 삶 최고!",
    likes: 10,
    comments: 5,
    views: 51,
    createdAt: "2025-04-22T09:00:00Z",
  },
  {
    postId: 1,
    nickname: "김현수",
    ageGroup: "30대",
    location: "대전",
    job: "디자인",
    content: "대전 교통 편하고 스트레스 덜 받아요.",
    likes: 8,
    comments: 2,
    views: 35,
    createdAt: "2025-04-21T16:00:00Z",
  },
  {
    postId: 2,
    nickname: "오스틴",
    ageGroup: "20대",
    location: "춘천",
    job: "마케팅",
    content: "자연과 함께하는 춘천 라이프 추천!",
    likes: 12,
    comments: 6,
    views: 40,
    createdAt: "2025-04-20T12:00:00Z",
  },

  {
    postId: 3,
    nickname: "문보경",
    ageGroup: "10대",
    location: "제주",
    job: "디자인",
    content: "제주에서 디자인 중입니다. 처음엔 걱정했지만 지금은 만족해요.",
    likes: 9,
    comments: 1,
    views: 106,
    createdAt: "2025-03-28T16:40:34.561Z",
  },
  {
    postId: 4,
    nickname: "오지환",
    ageGroup: "30대",
    location: "울산",
    job: "IT",
    content:
      "울산에서 IT 중입니다. 지역 생활비가 적당해서 저축이 가능해졌어요.",
    likes: 7,
    comments: 3,
    views: 49,
    createdAt: "2025-04-04T14:40:34.561Z",
  },
  {
    postId: 5,
    nickname: "박동원",
    ageGroup: "30대",
    location: "광주",
    job: "영업",
    content: "광주에서 영업 중입니다. 자연 환경이 좋아서 힐링 돼요.",
    likes: 12,
    comments: 7,
    views: 95,
    createdAt: "2025-04-13T09:40:34.561Z",
  },
  {
    postId: 6,
    nickname: "박해민",
    ageGroup: "30대",
    location: "울산",
    job: "마케팅",
    content: "울산에서 마케팅 중입니다. 여기 와서 삶의 질이 달라졌어요.",
    likes: 9,
    comments: 3,
    views: 117,
    createdAt: "2025-04-11T06:40:34.561Z",
  },
  {
    postId: 7,
    nickname: "문성주",
    ageGroup: "20대",
    location: "부산",
    job: "마케팅",
    content: "부산에서 마케팅 중입니다. 일과 삶의 균형이 잡히는 느낌이에요.",
    likes: 24,
    comments: 4,
    views: 25,
    createdAt: "2025-03-28T19:40:34.561Z",
  },
  {
    postId: 8,
    nickname: "신민재",
    ageGroup: "20대",
    location: "부산",
    job: "교육",
    content: "부산에서 교육 중입니다. 여기 와서 삶의 질이 달라졌어요.",
    likes: 25,
    comments: 5,
    views: 93,
    createdAt: "2025-04-14T11:40:34.561Z",
  },
  {
    postId: 9,
    nickname: "구본혁",
    ageGroup: "10대",
    location: "광주",
    job: "마케팅",
    content: "광주에서 마케팅 중입니다. 사람들이 친절하고 정이 많아요.",
    likes: 12,
    comments: 1,
    views: 68,
    createdAt: "2025-04-12T19:40:34.561Z",
  },
  {
    postId: 10,
    nickname: "송찬의",
    ageGroup: "10대",
    location: "춘천",
    job: "마케팅",
    content: "춘천에서 마케팅 중입니다. 처음엔 걱정했지만 지금은 만족해요.",
    likes: 26,
    comments: 4,
    views: 109,
    createdAt: "2025-03-30T13:40:34.561Z",
  }
];
