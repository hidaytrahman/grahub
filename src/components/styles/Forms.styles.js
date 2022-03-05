import styled, { css } from "styled-components";
import { Link } from "../common/Forms";

const baseInputStyles = css`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button = styled.button`
  ${baseInputStyles}

  background: ${({ theme }) => theme.colors.primary};

  ${({ variant, theme }) =>
    variant === "primary"
      ? `background: ${theme.colors.primary};`
      : variant === "secondary"
      ? `background: ${theme.colors.grey};`
      : variant === "success"
      ? `color: ${theme.colors.success};`
      : variant === "danger"
      ? `background: ${theme.colors.danger}; color: #fff;`
      : variant === "warning"
      ? `color: ${theme.colors.warning};`
      : `color: ${theme.colors.text};`};

  &:hover {
    color: #000;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ButtonLink = styled(Button)`
  color: #c4c4;
`;

export const StyledLink = styled.a`
  color: palevioletred;
  font-weight: bold;
`;

export const Message = styled.div`
  color: palevioletred;
  font-size: 12px;
`;

export const Input = styled.input`
  ${baseInputStyles}
`;

export const Textarea = styled.textarea`
  ${baseInputStyles}
`;
