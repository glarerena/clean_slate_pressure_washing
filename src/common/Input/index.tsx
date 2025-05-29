import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
// import { Label } from "../TextArea/styles"; ← You can remove this import too
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t }: InputProps) => (
  <Container>
    {/* Removed the visible label */}
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
