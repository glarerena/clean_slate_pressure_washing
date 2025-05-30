import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const BlockWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 2rem;
  margin-top: -8rem;

  @media only screen and (max-width: 1045px) {
    padding-right: 0;
    text-align: center;
    margin-top: 0;
  }
`;

export const ContactFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SubmitButton = styled.button`
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #40a9ff;
  }
`;
