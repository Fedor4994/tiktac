import { ReactNode } from "react";
import * as Styled from "./Container.styled";

const Container = ({ children }: { children: ReactNode }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Container;
