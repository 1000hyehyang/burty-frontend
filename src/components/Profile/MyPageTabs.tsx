// 📄 components/Profile/MyPageTabs.tsx
import CategoryTabs from "../Common/CategoryTabs";
import { useMyPageStore, MyPageTab } from "../../store/useMyPageStore";

const tabs: MyPageTab[] = ["찜 목록", "히스토리", "커뮤니티"];

const MyPageTabs = () => {
  const selected = useMyPageStore((s) => s.selectedTab);
  const setSelected = useMyPageStore((s) => s.setTab);

  return (
    <CategoryTabs
      categories={tabs}
      selected={selected}
      onSelect={(val) => setSelected(val as MyPageTab)}
    />
  );
};

export default MyPageTabs;
