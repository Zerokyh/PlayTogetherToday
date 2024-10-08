// mui.ts
import MuiDrawer from "@mui/material/Drawer";
import { Theme, CSSObject, styled } from "@mui/material/styles";
import { colors, theme } from "./colors";
import { sizes } from "./sizes";
import { Box } from "@mui/material";
import { MyInfoInnerBoxProps } from "../utils/type";
import { bgcolor, borderRadius, color, height, minWidth } from "@mui/system";
import useThemeStore, { ThemeType } from "../store/store";

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

export const DisableOutletBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: "300px",
  width: "calc(100% - 300px)",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 10,
});

export const FullPageBox = styled(Box)({
  width: `calc(100vw - ${sizes.drawerWidth})`,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "#F5F7F8",
});

export const WidthHalfOutterBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  gap: 16,
});

export const WidthHalfInnerBox = styled(Box)({
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const MySettingOutterBox = styled(Box)(({}) => {
  const { isTheme } = useThemeStore();
  return {
    backgroundColor:
      isTheme == "기본"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    minWidth: 500,
    minHeight: 640,
    borderRadius: sizes.borderRadius.medium,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 0,
    position: "relative",
    top: -18,
  };
});

export const MySettingInnerBox = styled(Box)(({}) => {
  const { isTheme } = useThemeStore();
  return {
    // 테마에 따라 색이 바뀔 영역에다 삼항식으로 설정
    backgroundColor:
      isTheme == "기본"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    width: 400,
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizes.borderRadius.medium,
    gap: 30,
  };
});

export const MyInfoInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: 0,
  gap: 1,
  width: "auto",
});

export const DashboardGridBox = styled(Box)({
  width: "100vw",
  height: "100%",
  // maxHeight: "95.8vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingY: "20px",
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
  border: `5px solid ${colors.border.primary}`,
};

export const ContentsBoxImg = {
  objectFit: "cover",
  objectPosition: "center top",
  width: "100%",
  height: "50%", // 이미지가 차지할 공간의 비율을 조정
};

export const WidthHalfBoxInnerMui = {
  width: "100%",
  height: "100%",
  bgcolor: colors.background.secondary,
  borderRadius: sizes.borderRadius.normal,
  display: "flex",
  flexDirection: "column",
  padding: sizes.padding.none,
  margin: 0,
};

export const SkeletonMini = {
  mx: "auto",
  width: 270,
  height: 140,
};

export const SkeletonNormal = {
  mx: "auto",
  width: 224,
  height: 200,
};

export const LinkedButtonNormal = {
  width: 129,
  height: 37,
  fontWeight: 600,
  border: `1px solid ${colors.border.drawer}`,
  fontSize: sizes.fontSize.medium,
};

export const LinkedButtonHeightSmall = {
  width: 130,
  height: 24,
  fontWeight: 600,
  border: `1px solid ${colors.text.primary}`,
  fontSize: sizes.fontSize.medium,
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
  alignItems: "flex-end",
  justifyContent: "flex-end",
  gap: 1,
  py: 2,
  borderRadius: sizes.borderRadius.medium,
};

export const InputMuiStyle = {
  position: "relative",
  bottom: 10,
  color: "#23374D", // 입력 텍스트 색상 설정
  "&:before": {
    borderBottom: `1px solid #23374D !important`, // 기본 상태 밑줄 색상
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottom: `2px solid #23374D !important`, // 호버 시 밑줄 색상
  },
  "&.Mui-focused:after": {
    borderBottom: `2px solid #23374D !important`, // 포커스 후 밑줄 색상
  },
  "&.Mui-disabled": {
    color: `#23374D !important`, // 비활성화 상태에서 텍스트 색상
    "&:before": {
      borderBottom: `1px solid #23374D !important`, // 비활성화 상태에서 밑줄 색상
    },
  },
  // 레이블과 입력 필드의 전체 색상 설정
  "& .MuiInputBase-input": {
    color: "#23374D", // 입력 텍스트 색상 설정
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
  color: colors.background.drawer,
  position: "absolute",
  top: 5,
  right: -6,
};

export const SideBarLogoStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

// modal
export const ModalMuiStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "background.paper",
  boxShadow: 24,
};

// modal form style
export const PrimaryButtonStyle = {
  width: "160px",
  borderRadius: 0,
};

export const SecondaryButtonStyle = {
  width: "160px",
  bgcolor: "#F2F2F2",
  color: "black",
  "&:hover": {
    backgroundColor: "#b2bec3",
  },
  borderRadius: 0,
};
export const ModalFormStyle = {
  width: "330px",
  height: "100px",
  display: "flex",
  alignContent: "center",
};

export const ModalFormContentsStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  bgcolor: "#F3F3F3",
  px: "5px",
};

// groupBorder

export const BorderListBox = styled(Box)(({}) => {
  const { isTheme } = useThemeStore();
  return {
    width: "100%",
    height: "100%",
    borderRadius: sizes.borderRadius.normal,
    backgroundColor:
      isTheme === "기본"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    display: "flex",
    flexDirection: "column",
    gap: sizes.gap.xLarge,
    alignItems: "center",
    padding: "10px 12px",
  };
});

export const GroupListBox = styled(Box)(({ theme }) => {
  const { isTheme } = useThemeStore();
  return {
    width: "100%",
    height: "fit-content",
    borderRadius: sizes.borderRadius.normal,
    backgroundColor:
      isTheme === "기본"
        ? colors.background.tertiary
        : colors.sub_background.tertiary,
  };
});

export const GroupImgAvatar = {
  width: sizes.avatar.logo,
  height: sizes.avatar.logo,
  mx: "auto",
  border: `5px solid ${colors.border.primary}`,
};

export const BorderSetBox = styled(Box)({
  width: "50%",
  height: "100%",
});

export const GroupFirstBorder = styled(Box)({
  width: "100%",
  padding: "20px 0px 0px 0px",
});

export const MemberImgAvatar = {
  width: sizes.avatar.profileLogo,
  height: sizes.avatar.profileLogo,
  mx: "auto",
  borderRadius: sizes.borderRadius.circle,
  minWidth: "0px",
};
