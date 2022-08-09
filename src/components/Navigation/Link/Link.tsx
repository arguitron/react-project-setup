import { ReactNode } from "react";
import * as Styled from "./Link.styled";

type LinkProps = {
  children?: ReactNode;

  anchorColor?: string;

  isActive?: boolean;
};

export const Link = ({
  children,
  anchorColor = "#a47e3b",
  isActive,
}: LinkProps) => {
  return (
    <Styled.Link>
      <Styled.Anchor anchorColor={anchorColor} isActive={isActive}>
        {children}
      </Styled.Anchor>
    </Styled.Link>
  );
};
