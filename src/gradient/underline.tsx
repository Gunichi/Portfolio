import styled from "@emotion/styled";
import { Props, GradientType } from "./types";

const UnderlineStyle = styled.span<{ gradient: GradientType }>`
  background-image: linear-gradient(
    ${(props) => props.gradient.direction},
    ${(props) => props.gradient.range}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
`;

export const Underline = ({ children, gradient }: Props) => {
  if (!gradient) return null;
  return <UnderlineStyle gradient={gradient}>{children}</UnderlineStyle>;
};
