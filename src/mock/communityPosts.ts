export interface CommunityPost {
  nickname: string;
  ageGroup: string;
  location: string;
  job: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
}

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
  },

  ...Array.from({ length: 15 }, (_, i) => ({
    nickname: `사용자${i + 1}`,
    ageGroup: i % 3 === 0 ? "10대" : i % 3 === 1 ? "20대" : "30대",
    location: ["서울", "부산", "대전"][i % 3],
    job: ["IT", "디자인", "마케팅"][i % 3],
    content: `이것은 더미 커뮤니티 포스트 ${i + 1}입니다.`,
    likes: Math.floor(Math.random() * 20),
    comments: Math.floor(Math.random() * 10),
    views: Math.floor(Math.random() * 100),
  })),
];
