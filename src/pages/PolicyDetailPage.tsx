// 📄 pages/PolicyDetailPage.tsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePolicyDetailStore } from "../store/policy/usePolicyDetailStore";
import { dummyPolicyDetails } from "../mock/dummyPolicyDetails";
import PolicyDetailView from "../components/Policy/PolicyDetailView";

const PolicyDetailPage = () => {
  const { id } = useParams();
  const { policy, setPolicy } = usePolicyDetailStore();

  useEffect(() => {
    const found = dummyPolicyDetails.find(p => p.id === Number(id));
    if (found) setPolicy(found);
  }, [id]);

  return policy ? <PolicyDetailView policy={policy} /> : <p>정책을 불러오는 중...</p>;
};

export default PolicyDetailPage;
