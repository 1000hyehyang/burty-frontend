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
  }
  
  export const dummyCommunityPosts: CommunityPost[] = [
    {
      nickname: "김버티",
      ageGroup: "20대",
      location: "부산",
      job: "IT 개발",
      content:
        "부산 해운대에 정착한지 2년 되었어요. 바다 보며 출퇴근하는 삶이 행복합니다. 서울보다 여유롭고 물가도 저렴해요.",
      likes: 10,
      comments: 5,
      views: 51,
    },
    {
      nickname: "이서울",
      ageGroup: "30대",
      location: "대전",
      job: "디자이너",
      content:
        "대전의 교통이 정말 편리해서 정착에 만족합니다. 서울보다 스트레스 덜 받아요.",
      likes: 8,
      comments: 2,
      views: 35,
    },
    {
      nickname: "박춘천",
      ageGroup: "20대",
      location: "춘천",
      job: "마케터",
      content:
        "자연과 함께하는 삶을 살고 싶다면 춘천 추천해요. 공기 좋아요!",
      likes: 12,
      comments: 6,
      views: 40,
    },
  ];
  