import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  FooterSection,
  Title,
  Extra,
  LogoContainer,
  Para,
  Large,
  Language,
} from "./styles";
import styled from "styled-components";

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
  font-size: 1.1rem;

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

const ContactInfo = styled.div`
  margin-top: 1rem;
  
  a {
    color: #18216d;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1.1rem;
    
    &:hover {
      color: #ff8260;
    }
  }
`;

const WebsiteCredit = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
  
  a {
    color: #18216d;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff8260;
    }
  }
`;

const Footer = ({ t }: { t: TFunction }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
              <ContactInfo>
                <a href="mailto:cleanslateexperts@gmail.com">
                  cleanslateexperts@gmail.com
                </a>
              </ContactInfo>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <StyledSocialLink
                href="https://www.facebook.com/profile.php?id=61573298500600"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <SvgIcon src="blue.svg" width="40px" height="40px" />
              </StyledSocialLink>
            </div>
          </Row>
          <WebsiteCredit>
            Created with ❤️ by <a href="https://renaglare.dev" target="_blank" rel="noopener noreferrer">renaglare.dev</a> © 2025
          </WebsiteCredit>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
