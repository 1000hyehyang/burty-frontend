// 📄 src/mock/communityPosts.ts
export interface CommunityPost {
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

const nicknames = ["김버티", "이서울", "박춘천", "최광주", "홍제주", "한대전", "유전주", "강울산"];
const ageGroups = ["10대", "20대", "30대"] as const;
const locations = ["서울", "부산", "대전", "광주", "제주", "춘천", "울산", "전주"] as const;
const jobs = ["IT", "디자인", "마케팅", "행정", "교육", "영업"] as const;
const sampleContents = [
  "지역 생활비가 적당해서 저축이 가능해졌어요.",
  "사람들이 친절하고 정이 많아요.",
  "서울보다 확실히 스트레스가 줄었어요.",
  "처음엔 걱정했지만 지금은 만족해요.",
  "여기 와서 삶의 질이 달라졌어요.",
  "일과 삶의 균형이 잡히는 느낌이에요.",
  "자연 환경이 좋아서 힐링 돼요.",
  "대중교통은 조금 불편하지만 익숙해지면 괜찮아요.",
];

const getRandom = <T>(arr: readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const generateRandomPost = (i: number): CommunityPost => {
  const nickname = getRandom(nicknames) + i;
  const ageGroup = getRandom(ageGroups);
  const location = getRandom(locations);
  const job = getRandom(jobs);
  const content = getRandom(sampleContents);
  const likes = Math.floor(Math.random() * 30);
  const comments = Math.floor(Math.random() * 10);
  const views = Math.floor(Math.random() * 100);
  const createdAt = new Date(
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30)
  ).toISOString();

  return {
    nickname,
    ageGroup,
    location,
    job,
    content: `${location}에서 ${job} 중입니다. ${content}`,
    likes,
    comments,
    views,
    createdAt,
  };
};

export const dummyCommunityPosts: CommunityPost[] = [
  {
    nickname: "김버티",
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
    nickname: "이서울",
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
    nickname: "박춘천",
    ageGroup: "20대",
    location: "춘천",
    job: "마케팅",
    content: "자연과 함께하는 춘천 라이프 추천!",
    likes: 12,
    comments: 6,
    views: 40,
    createdAt: "2025-04-20T12:00:00Z",
  },
  ...Array.from({ length: 30 }, (_, i) => generateRandomPost(i)),
];
