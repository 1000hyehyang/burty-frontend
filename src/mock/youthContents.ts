// 📄 mock/youthContents.ts
import Example_1 from "../assets/images/contents/ex-1.svg";
import Example_2 from "../assets/images/contents/ex-2.svg";
import Example_3 from "../assets/images/contents/ex-3.svg";
import Example_4 from "../assets/images/contents/ex-4.svg";
import Example_5 from "../assets/images/contents/ex-5.svg";

export interface YouthContent {
  id: number;
  image: string;
  alt: string;
}

export const dummyYouthContents: YouthContent[] = [
  { id: 1, image: Example_1, alt: "컨텐츠1" },
  { id: 2, image: Example_2, alt: "컨텐츠2" },
  { id: 3, image: Example_3, alt: "컨텐츠3" },
  { id: 4, image: Example_4, alt: "컨텐츠4" },
  { id: 5, image: Example_5, alt: "컨텐츠5" },
  { id: 6, image: Example_1, alt: "컨텐츠6" },
];
