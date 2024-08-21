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
