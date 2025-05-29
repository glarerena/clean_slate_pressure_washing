import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

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

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
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
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="clean.svg"
                  aria-label="CleanSlate Pressure Washing"
                  width="130px"
                  height="auto"
                />
              </LogoContainer>

            </NavLink>
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
