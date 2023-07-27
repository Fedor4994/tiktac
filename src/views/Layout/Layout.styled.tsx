import styled from "styled-components";

export const Content = styled("div")`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const Header = styled("header")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HeaderMenu = styled("div")`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const Footer = styled("footer")`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const FooterList = styled("ul")`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
