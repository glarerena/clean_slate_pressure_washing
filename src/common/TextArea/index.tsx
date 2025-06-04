import React from "react";
import { withTranslation } from "react-i18next";
import { StyledContainer, StyledTextArea } from "./styles";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
  t: (key: string) => string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({ name, placeholder, t, onChange, ...rest }: Props) => {
  return (
    <StyledContainer>
      <StyledTextArea
        id={name}
        name={name}
        placeholder={placeholder ? String(t(placeholder)) : ""}
        onChange={onChange}
        {...rest}
      />
    </StyledContainer>
  );
};

export default withTranslation()(TextArea);
