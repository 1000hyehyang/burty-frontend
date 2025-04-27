// 📄 components/Settlement/ContentSection.tsx
import styled from "styled-components";
import hoverAndClickEffect from "../Common/mixins/hoverAndClickEffect";
import { dummyYouthContents } from "../../mock/youthContents";
import { useNavigate } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
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
  const navigate = useNavigate();
  return (
    <>
      <Grid>
        {dummyYouthContents.map(({ id, image }) => (
          <ContentCard key={id} onClick={() => navigate(`/settlement/content/${id}`)}>
            <img src={image} />
          </ContentCard>
        ))}
      </Grid>
    </>
  );
};

export default ContentSection;
