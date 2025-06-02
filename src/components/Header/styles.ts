import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

export const HeaderSection = styled("header")`
  padding: 1rem 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media screen and (max-width: 768px) {
    display: block;
  }
  display: none;
  cursor: pointer;
`;

export const NotHidden = styled("div")`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled("h4")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  color: #18216d;
  margin-bottom: 1.5rem;
`;

export const CustomNavLinkSmall = styled("div")`
  display: inline-block;
  text-align: center;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  font-weight: 500;
  color: #18216d;

  &:hover {
    color: #ff8260;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.3rem;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Outline = styled("span")`
  width: 30px;
  height: 3px;
  background: #18216d;
  display: block;
  position: relative;
  transition: all 0.3s ease;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background: #18216d;
    transition: all 0.3s ease;
  }

  &:before {
    transform: translateY(-8px);
  }

  &:after {
    transform: translateY(8px);
  }
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    width: 300px !important;
  }

  .ant-drawer-body {
    padding: 2rem;
  }

  .ant-drawer-header {
    padding: 1.5rem;
  }

  .ant-drawer-title {
    font-size: 1.5rem;
    color: #18216d;
  }
`;

export const MenuItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
