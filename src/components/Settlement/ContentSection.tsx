// 📄 components/Settlement/ContentSection.tsx
import styled from "styled-components";
import hoverAndClickEffect from "../Common/mixins/hoverAndClickEffect";
import { dummyYouthContents } from "../../mock/youthContents";

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
