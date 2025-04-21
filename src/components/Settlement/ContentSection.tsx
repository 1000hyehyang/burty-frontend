// 📄 components/Settlement/ContentSection.tsx
import styled from "styled-components";
import Example_1 from "../../assets/images/contents/ex-1.svg";
import Example_2 from "../../assets/images/contents/ex-2.svg";
import Example_3 from "../../assets/images/contents/ex-3.svg";
import Example_4 from "../../assets/images/contents/ex-4.svg";
import Example_5 from "../../assets/images/contents/ex-5.svg";

const Title = styled.h2`
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 600;
  color: var(--variable-collection-text-100);
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: clamp(64px, 8vw, 80px);
`;

const ContentCard = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentSection = () => {
  return (
    <>
      <Title>청년 콘텐츠</Title>
      <Grid>
        <ContentCard>
          <img src={Example_1} alt="컨텐츠1" />
        </ContentCard>
        <ContentCard>
          <img src={Example_2} alt="컨텐츠2" />
        </ContentCard>
        <ContentCard>
          <img src={Example_3} alt="컨텐츠3" />
        </ContentCard>
        <ContentCard>
          <img src={Example_4} alt="컨텐츠4" />
        </ContentCard>
        <ContentCard>
          <img src={Example_5} alt="컨텐츠5" />
        </ContentCard>
        <ContentCard>
          <img src={Example_1} alt="컨텐츠6" />
        </ContentCard>
      </Grid>
    </>
  );
};

export default ContentSection;
