import { ReactNode } from "react";
import { StyledLink } from "../styles/Forms.styles";

export const Button = (props: any) => {
  return <Button {...props}>{props.children}</Button>;
};

type LinkProps = {
  children?: ReactNode;
  className?: string;
  href?: string;
};

export const Link = (props: LinkProps) => (
  <StyledLink {...props}>{props.children}</StyledLink>
);
