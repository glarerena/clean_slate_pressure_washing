import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import {
  GallerySection,
  Title,
  Subtitle,
  ImageContainer,
  ImageWrapper,
  BeforeAfterContainer,
  BeforeImage,
  AfterImage,
  ComparisonLabel
} from "./styles";
import Container from "../../common/Container";
import { Fade } from "react-awesome-reveal";
import galleryContent from "../../content/GalleryContent.json";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

interface GalleryContent {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

const Gallery = ({ t }: { t: TFunction }) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <GallerySection id="gallery">
      <Container>
        <Fade direction="up">
          <Title>{t(galleryContent.title)}</Title>
          <Subtitle>{t(galleryContent.subtitle)}</Subtitle>
          <ImageContainer>
            {galleryContent.images.map((image: GalleryImage) => (
              <ImageWrapper
                key={image.id}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <BeforeAfterContainer>
                  <BeforeImage
                    src={image.beforeImage}
                    alt={`${image.title} - Before`}
                    loading="lazy"
                    style={{ opacity: hoveredImage === image.id ? 0 : 1 }}
                  />
                  <AfterImage
                    src={image.afterImage}
                    alt={`${image.title} - After`}
                    loading="lazy"
                    style={{ opacity: hoveredImage === image.id ? 1 : 0 }}
                  />
                  <ComparisonLabel>
                    {hoveredImage === image.id ? "After" : "Before"}
                  </ComparisonLabel>
                </BeforeAfterContainer>
              </ImageWrapper>
            ))}
          </ImageContainer>
        </Fade>
      </Container>
    </GallerySection>
  );
};

export default withTranslation()(Gallery); 