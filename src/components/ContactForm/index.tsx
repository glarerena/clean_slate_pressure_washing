import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import {
  ContactContainer,
  FormGroup,
  ButtonContainer,
  BlockWrapper,
} from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle" gutter={[32, 32]}>
        <Col lg={12} md={11} sm={24} xs={24}>
          <BlockWrapper>
            <Block title={title} content={content} />
          </BlockWrapper>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <FormGroup
            action="https://formsubmit.co/cleanslateexperts@gmail.com"
            method="POST"
            autoComplete="off"
          >
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <Col span={24}>
              <Input
                type="text"
                name="name"
                placeholder={t("Your Name")}
                required={true}
              />
            </Col>
            <Col span={24}>
              <Input
                type="email"
                name="email"
                placeholder={t("Your Email")}
                required={true}
              />
            </Col>
            <Col span={24}>
              <TextArea
                name="message"
                placeholder={t("Your Message")}
                required={true}
              />
            </Col>
            <ButtonContainer>
              <Button type="submit" name="submit">
                {t("Submit")}
              </Button>
            </ButtonContainer>
          </FormGroup>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);

