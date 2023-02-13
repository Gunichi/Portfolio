import { ReactNode } from "react";

export interface IGradient {
  name: string;
  direction: string;
  colors: string[];
  positions: string[];
}

export type GradientType = { range: string } & Pick<
  IGradient,
  "name" | "direction"
>;

export interface IResult {
  data: IGradient[];
}

export interface Props {
  children: ReactNode;
  gradient?: GradientType;
}
