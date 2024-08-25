// type.ts
import { ReactNode } from "react";

export type ImgAvatarProps = {
  alt: string;
  src?: string;
  sx?: object;
};

export type ContentsBoxProps = {
  index: number;
  img: string;
  subject: string;
  introduce: string;
  introduce_add: string;
};

export type LinkedButtonProps = {
  type?: "text" | "contained" | "outlined";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  href?: string;
  text?: string;
  sx?: object;
};

export type TextButtonProps = {
  text?: string;
  sx?: object;
};

export type TextCardProps = {
  text: string;
  sx?: object;
};

export type WidthHalfBoxProps = {
  children?: ReactNode;
};

export type BasicIconButtonProps = {
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
};
