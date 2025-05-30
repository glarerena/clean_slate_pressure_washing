import styled from "styled-components";

export const StyledButton = styled("button")<{
  color?: string;
  name?: string;
}>`
  background: ${(p) => p.color || "#2e186a"};
  color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  font-size: 1.125rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 15%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;
