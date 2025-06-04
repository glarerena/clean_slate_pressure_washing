import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { ContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  VideoContainer,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isVideo = icon?.endsWith(".mov") || icon?.endsWith(".mp4");

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce={true}>
        <div>
          <StyledRow
            justify="space-between"
            align="middle"
            id={id}
            direction={direction}
          >
            <Col lg={11} md={11} sm={12} xs={24}>
              {isVideo ? (
                <VideoContainer>
                  <video
                    src={`/${icon}`}
                    controls
                    poster="/img/icons/cleanslate-logo.png"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </VideoContainer>
              ) : (
                <SvgIcon src={icon} width="100%" height="100%" />
              )}
            </Col>

            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <h6>{t(title)}</h6>
                <Content>{t(content)}</Content>

                {direction === "right" ? (
                  <ButtonWrapper>
                    {Array.isArray(button) &&
                      button.map((item, index) => (
                        <Button
                          key={index}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                        >
                          {t(item.title)}
                        </Button>
                      ))}
                  </ButtonWrapper>
                ) : (
                  <ServiceWrapper>
                    <Row justify="space-between">
                      {Array.isArray(section) &&
                        section.map((item, index) => (
                          <Col key={index} span={11}>
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                        ))}
                    </Row>
                  </ServiceWrapper>
                )}
              </ContentWrapper>
            </Col>
          </StyledRow>
        </div>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
