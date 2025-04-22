// 📄 components/Policy/PolicyTabs.tsx
import { useState } from "react";
import CategoryTabs from "../Common/CategoryTabs";

const categories = ["전체", "일자리", "주거", "교육", "복지"];

const PolicyTabs = () => {
  const [selected, setSelected] = useState("전체");

  return (
    <CategoryTabs
      categories={categories}
      selected={selected}
      onSelect={setSelected}
    />
  );
};

export default PolicyTabs;
