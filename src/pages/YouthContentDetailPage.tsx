import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useYouthContentDetailStore } from "../store/youthContent/useYouthContentDetailStore";
import TitleSection from "../components/YouthContent/TitleSection";
import ContentSection from "../components/YouthContent/ContentSection";

const YouthContentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { content, fetchContent } = useYouthContentDetailStore();

  useEffect(() => {
    if (id) {
      fetchContent(Number(id));
    }
  }, [id]);

  if (!content) return <p>로딩중...</p>;

  return (
    <>
      <TitleSection category={content.category} title={content.title} date={content.createdAt} />
      <ContentSection content={content.content} />
    </>
  );
};

export default YouthContentDetailPage;