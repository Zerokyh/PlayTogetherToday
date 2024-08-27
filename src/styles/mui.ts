// mui.ts
import MuiDrawer from "@mui/material/Drawer";
import { Theme, CSSObject, styled } from "@mui/material/styles";
import { colors, theme } from "./colors";
import { sizes } from "./sizes";
import { Box } from "@mui/material";
import { MyInfoInnerBoxProps } from "../utils/type";

export const openedMixin = (theme: Theme): CSSObject => ({
  width: sizes.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: sizes.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const FullPageBox = styled(Box)({
  width: `calc(100vw - ${sizes.drawerWidth})`,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MySettingOutterBox = styled(Box)({
  backgroundColor: colors.background.primary,
  width: 600,
  height: 700,
  borderRadius: sizes.borderRadius.medium,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  padding: 0,
});

export const MySettingInnerBox = styled(Box)({
  width: 400,
  height: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: sizes.borderRadius.medium,
  gap: 30,
});

export const MyInfoInnerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isProfileImage",
})<MyInfoInnerBoxProps>(({ isProfileImage }) => ({
  display: "flex",
  alignItems: "center",
  paddingBottom: isProfileImage ? 8 : 0,
  gap: isProfileImage ? 70 : 1,
  width: isProfileImage ? "340px" : "auto",
}));

export const DashboardGridBox = styled(Box)({
  width: 1200,
  height: 900,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

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
  fontSize: sizes.fontSize.xsmall,
};

export const LinkedButtonHeightSmall = {
  width: 100,
  height: 30,
  color: colors.text.drawer,
  fontWeight: 600,
  border: `1px solid ${colors.border.drawer}`,
  fontSize: sizes.fontSize.xsmall,
};

export const TextButtonNormal = {
  width: "90px",
  minHeight: 48,
  justifyContent: "center",
  px: 2.5,
  fontSize: "12px",
};

export const MySettingInnerStyle = {
  width: 400,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end", // 자식 요소들을 세로 방향으로 우측 끝에 정렬
  justifyContent: "flex-end", // 자식 요소들을 수평 방향으로 우측 끝에 정렬
  gap: 1,
  py: 2,
  borderRadius: sizes.borderRadius.medium,
};

export const InputMuiStyle = {
  position: "relative",
  bottom: 10,
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.palette.primary.dark, // 기본 밑줄 색상
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: theme.palette.primary.dark, // 호버 시 밑줄 색상
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.dark, // 포커스 시 밑줄 색상
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.dark, // 라벨 색상
  },
  "& .MuiInputBase-input": {
    color: theme.palette.primary.dark, // 입력 텍스트 색상
  },
};

export const ModifyLinkedButtonStyle = {
  height: "20px",
  width: "40px",
  minWidth: "auto",
  padding: 0,
  backgroundColor: theme.palette.primary.main,
  color: "black",
  "&:hover": {
    color: "white",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const MySettingTitleStyle = {
  width: 130,
  height: 50,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const OpenSideBarSettingButtonStyle = {
  height: "20px",
  width: "40px",
  minWidth: "auto",
  backgroundColor: theme.palette.primary.main,
  color: "black",
  "&:hover": {
    color: "white",
  },
};
