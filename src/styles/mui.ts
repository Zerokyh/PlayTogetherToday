// mui.ts

import { colors } from "./colors";
import { sizes } from "./sizes";

export const AvatarSize = {
  width: sizes.avatar.logo,
  height: sizes.avatar.logo,
  mx: "auto",
};

export const ChatListBoxAvatarSize = {
  width: sizes.avatar.chat,
  height: sizes.avatar.chat,
  mx: "auto",
};

export const ContentsBoxImgSize = {
  objectFit: "cover",
  objectPosition: "center top",
  width: "100%",
  height: "200px",
};

export const WidthHalfBoxSize = {
  maxWidth: sizes.width.half,
  maxHeight: sizes.height.full,
  width: "100%",
  height: "100%",
  bgcolor: colors.background.main,
  borderRadius: sizes.borderRadius.normal,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: sizes.padding.large,
};
