import { TFunction } from "react-i18next";
export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  type?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  t?: (key: string) => string;
}
export interface validateProps {
  name: string;
  message: string;
  email: string;
}
