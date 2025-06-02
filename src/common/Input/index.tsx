import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
// import { Label } from "../TextArea/styles"; ← You can remove this import too
import { InputProps } from "../types";

const Input = ({ name, placeholder, type = "text", value, onChange, t }: InputProps) => (
  <Container>
    {/* Removed the visible label */}
    <StyledInput
      type={type}
      placeholder={t ? t(placeholder) : placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
