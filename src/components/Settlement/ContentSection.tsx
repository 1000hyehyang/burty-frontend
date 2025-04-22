// 📄 components/Settlement/ContentSection.tsx
import styled from "styled-components";
import hoverAndClickEffect from "../Common/mixins/hoverAndClickEffect";
import { dummyYouthContents } from "../../mock/youthContents";

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
  
  ${hoverAndClickEffect}
`;

const ContentSection = () => {
  return (
    <>
      <Title>청년 콘텐츠</Title>
      <Grid>
        {dummyYouthContents.map(({ id, image, alt }) => (
          <ContentCard key={id}>
            <img src={image} alt={alt} />
          </ContentCard>
        ))}
      </Grid>
    </>
  );
};

export default ContentSection;
