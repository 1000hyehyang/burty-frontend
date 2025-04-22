// 📄 components/Policy/PolicyTabs.tsx
import { usePolicyStore, PolicyCategory } from "../../store/usePolicyStore";
import CategoryTabs from "../Common/CategoryTabs";

const categories: PolicyCategory[] = ["전체", "일자리", "주거", "교육", "복지"];

const PolicyTabs = () => {
  const selected = usePolicyStore((s) => s.selectedCategory);
  const setSelected = usePolicyStore((s) => s.setCategory);

  return (
    <CategoryTabs
      categories={categories}
      selected={selected}
      onSelect={(val) => setSelected(val as PolicyCategory)}
    />
  );
};

export default PolicyTabs;
