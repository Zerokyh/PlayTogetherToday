// type.ts
import { ReactElement, ReactNode } from "react";

export type ImgAvatarProps = {
  alt?: string;
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

export type IconTextButtonProps = {
  icon: React.ReactElement;
  text?: string;
  iconsize?: string;
  fontsize?: string;
};

export type IconTextTextBoxProp = {
  children?: ReactNode;
  icontextboxprops: IconTextButtonProps;
  textbutton?: string;
  href?: string;
  hover?: { ":hover": { cursor: "pointer" } } | {};
  sx?: object;
};

export type IconTextMuiBoxProp = {
  icontextboxprops: IconTextButtonProps;
  component?: ReactElement;
  onClick?: () => void;
};

export type ChipTextBoxProps = {
  titlename: string;
};

export type TextFieldBasicProps = {
  inputSubject: string;
};

export type MyInfoInnerBoxProps = {
  isProfileImage?: boolean;
};

export type InputModifyBoxProp = {
  type?: "text" | "password";
  placeholder?: string;
  width?: string;
  sx?: object;
};

export type SwitchBoxProp = {
  color?: "primary" | "secondary";
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type IosSwitchButtonProps = {
  text?: string;
  color?: "primary" | "secondary";
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PTTUnion =
  | ImgAvatarProps
  | ContentsBoxProps
  | LinkedButtonProps
  | TextButtonProps
  | TextCardProps
  | WidthHalfBoxProps
  | BasicIconButtonProps
  | IconTextButtonProps
  | IconTextTextBoxProp
  | IconTextMuiBoxProp
  | ChipTextBoxProps
  | TextFieldBasicProps
  | MyInfoInnerBoxProps
  | InputModifyBoxProp
  | SwitchBoxProp
  | IosSwitchButtonProps;
