// 📄 components/Settlement/ContentSection.tsx
import styled from "styled-components";

const Section = styled.section`
  margin-top: 32px;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 16px;
`;

const ContentCard = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
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
    <Section>
      <h3 style={{ fontWeight: 700, fontSize: "16px" }}>청년 콘텐츠</h3>
      <Grid>
        <ContentCard>
          <img src="/content/1.png" alt="컨텐츠1" />
        </ContentCard>
        <ContentCard>
          <img src="/content/2.png" alt="컨텐츠2" />
        </ContentCard>
        <ContentCard>
          <img src="/content/3.png" alt="컨텐츠3" />
        </ContentCard>
        <ContentCard>
          <img src="/content/4.png" alt="컨텐츠4" />
        </ContentCard>
      </Grid>
    </Section>
  );
};

export default ContentSection;
