// mui.ts

import { colors } from "./colors";
import { sizes } from "./sizes";

export const AvatarSize = {
  width: sizes.avatar.logo,
  height: sizes.avatar.logo,
  mx: "auto",
};

export const ChatListBoxAvatar = {
  width: sizes.avatar.chat,
  height: sizes.avatar.chat,
  mx: "auto",
};

export const ContentsBoxImg = {
  objectFit: "cover",
  objectPosition: "center top",
  width: "100%",
  height: "200px",
};

export const WidthHalfBoxMui = {
  maxWidth: sizes.width.half,
  maxHeight: sizes.height.full,
  width: "100%",
  height: "100%",
  bgcolor: colors.background.primary,
  borderRadius: sizes.borderRadius.normal,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: sizes.padding.large,
};

export const SkeletonMini = {
  mx: "auto",
  width: 224,
  height: 140,
};

export const SkeletonNormal = {
  mx: "auto",
  width: 224,
  height: 200,
};

export const LinkedButtonNormal = {
  width: 100,
  height: 40,
  color: colors.text.drawer,
  fontWeight: 600,
  border: `1px solid ${colors.border.drawer}`,
  fontSize: sizes.fontSize.small,
};

export const TextButtonNormal = {
  width: "90px",
  minHeight: 48,
  justifyContent: "center",
  px: 2.5,
  position: "absolute",
  top: -54,
  fontSize: "12px",
};
