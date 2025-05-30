import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import styled from "styled-components";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const StyledSocialLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const GoogleReviewsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  text-decoration: none;
  color: #18216d;
  transition: all 0.3s ease;

  &:hover {
    color: #ff8260;
  }

  .stars {
    color: #fbbc04;
    font-size: 1.2rem;
  }

  .review-count {
    font-size: 0.9rem;
    color: #666;
  }
`;

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <StyledSocialLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="40px" height="40px" />
      </StyledSocialLink>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={24}>
              <Language>{t("Contact")}</Language>
              <Large as="div">Call or Text: (804) 661-2841</Large>
              <Para>Serving Danville, VA and nearby areas</Para>
              <a href="mailto:cleanslatewashing@gmail.com">
                <Chat>Email Us</Chat>
              </a>
              <GoogleReviewsLink 
                href="https://g.co/kgs/TCdz4Uy" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="stars">★★★★★</span>
                <span className="review-count">Read our reviews</span>
              </GoogleReviewsLink>
            </Col>

            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>{t("Services")}</Title>
              <Large as="div">Pressure Washing</Large>
              <Large as="div">Car Detailing</Large>
            </Col>

            {/* <Col lg={6} md={6} sm={12} xs={24}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="English"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="Spanish"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col> */}
          </Row>
        </Container>
      </FooterSection>

      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <LogoContainer onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <SvgIcon
                src="clean.svg"
                aria-label="CleanSlate Pressure Washing"
                width="130px"
                height="auto"
              />
            </LogoContainer>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61573298500600"
                src="blue.svg"
              />
              <SocialLink
                href="https://github.com/your-github"
                src="github.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/your-linkedin"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
