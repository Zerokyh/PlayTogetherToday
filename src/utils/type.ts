// type.ts
import { ReactElement, ReactNode } from "react";

export type ImgAvatarProps = {
  alt?: string;
  src?: string;
  sx?: object;
};

export type ContentsBoxProps = {
  img: string;
  subject: string;
  introduce: string;
  introduce_add: string;
  href: string;
};

export type LinkedButtonProps = {
  type?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  text: string;
  sx?: object;
  font?: object;
};

export type TextButtonProps = {
  text?: string;
  sx?: object;
  onClick?: () => void;
};

export type TextCardProps = {
  text: string;
  sx?: object;
};

export type WidthHalfBoxProps = {
  children?: ReactNode;
  sx?: object;
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
  onClick?: () => void;
};

export type IconTextTextBoxProp = {
  icontextboxprops: IconTextButtonProps;
  textbutton?: string;
  href?: string;
  hover?: { ":hover": { cursor: "pointer" } } | {};
  buttonTextSize?: string;
  sx?: object;
};

export type IconTextMuiBoxProp = {
  icontextboxprops: IconTextButtonProps;
  component?: ReactElement;
  onClick?: () => void;
};

export type ChipTextBoxProps = {
  titlename: string;
  width?: string;
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
  value?: string;
  width?: string;
  sx?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

// groupImg

export type GroupImgProps = {
  alt?: string;
  src?: string;
  sx?: object;
};
