import styled from "styled-components";

export const GallerySection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 4rem 0 2rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #18216d;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled("p")`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #666;
`;

export const ImageContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled("div")`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const BeforeAfterContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BeforeImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

export const AfterImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const ImageOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1rem;
  text-align: center;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

export const ImageTitle = styled("h3")`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ImageDescription = styled("p")`
  font-size: 1rem;
  margin: 0;
`;

export const ComparisonLabel = styled("div")`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  z-index: 2;
`; 