import { ReactNode } from "react";
import * as Styled from "./Link.styled";

type LinkProps = {
  children?: ReactNode;

  color?: string;

  isActive?: boolean;
};

export const Link = ({ children, color, isActive }: LinkProps) => {
  return (
    <Styled.Link>
      <Styled.Anchor anchorColor={color} isActive={isActive}>
        {children}
      </Styled.Anchor>
    </Styled.Link>
  );
};
