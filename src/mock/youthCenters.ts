// 📄 src/mock/youthCenters.ts

export interface YouthCenter {
    region: string;
    name: string;
    address: string;
    openingHours: string;
    lat: number;
    lng: number;
  }
  
  export const dummyYouthCenters: YouthCenter[] = [
    {
      region: "충청북도 옥천군",
      name: "청년이랑",
      address: "충북옥천군 옥천읍중앙로73",
      openingHours: "평일(10:00~21:00) 토요일(10:00~17:00)",
      lat: 36.3064,
      lng: 127.5711,
    },
    {
      region: "충청북도 옥천군",
      name: "청년내일센터",
      address: "충북옥천군 옥천읍하나로길 123",
      openingHours: "평일(09:00~18:00)",
      lat: 36.3043,
      lng: 127.5729,
    },
  ];
  