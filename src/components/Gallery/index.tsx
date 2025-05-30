import React from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { GallerySection, Title, Subtitle, ImageContainer, ImageWrapper, Image, ImageOverlay, ImageTitle, ImageDescription } from "./styles";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
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
  return (
    <GallerySection>
      <Container>
        <Fade direction="up">
          <Title>{t(galleryContent.title)}</Title>
          <Subtitle>{t(galleryContent.subtitle)}</Subtitle>
          <ImageContainer>
            {galleryContent.images.map((image: GalleryImage, index: number) => (
              <ImageWrapper key={index}>
                <Image src={image.beforeImage} alt={image.title} />
                <ImageOverlay>
                  <ImageTitle>{t(image.title)}</ImageTitle>
                  <ImageDescription>{t(image.description)}</ImageDescription>
                </ImageOverlay>
              </ImageWrapper>
            ))}
          </ImageContainer>
        </Fade>
      </Container>
    </GallerySection>
  );
};

export default withTranslation()(Gallery); 