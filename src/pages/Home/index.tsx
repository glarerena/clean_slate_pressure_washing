import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MissionContent from "../../content/MissionContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      {/* Services Section */}
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={IntroContent.icon}
        id="services"
      />

      {/* Gallery Section */}
      <ContentBlock
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon={MissionContent.icon}
        id="gallery"
      />

      {/* About Us Section */}
      <ContentBlock
        direction="right"
        title={AboutContent.title}
        content={AboutContent.text}
        icon={AboutContent.icon}
        id="aboutus"
      />

      {/* Contact Section */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
