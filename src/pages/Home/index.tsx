import React from "react";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import ContentBlock from "../../components/ContentBlock";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";
import MissionContent from "../../content/MissionContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";

const Home = () => {
  return (
    <main>
      <Container>
        <ScrollToTop />
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          icon={IntroContent.icon}
          id="services"
        />
        <ContentBlock
          direction="left"
          title={MissionContent.title}
          content={MissionContent.text}
          icon={MissionContent.icon}
          id="mission"
        />
        <ContentBlock
          direction="right"
          title={AboutContent.title}
          content={AboutContent.text}
          icon={AboutContent.icon}
          id="about"
        />
        <ContactForm
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
        <Map />
      </Container>
    </main>
  );
};

export default withTranslation()(Home);
