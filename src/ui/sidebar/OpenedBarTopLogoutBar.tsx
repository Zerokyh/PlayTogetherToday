import { Box, IconButton } from "@mui/material";
import { sizes } from "../../styles/sizes";
import LinkedButton from "../../components/atom/LinkedButton";
import useThemeStore from "../../store/store";
import { handleDrawerClose, handleLogOut } from "../../utils/func";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/theme";

const OpenedBarTopLogoutBar = () => {
  const { isLogin, isOpen, setIsOpen, setIsLogin } = useThemeStore();
  return (
    <Box
      width={sizes.drawerWidth}
      display={"flex"}
      justifyContent={"space-between"}
    >
      {isLogin ? (
        <LinkedButton
          sx={{
            width: "100px",
            fontSize: sizes.fontSize.small,
            display: "flex",
            justifyContent: "center",
            color: colors.text.drawer,
          }}
          text="로그아웃"
          onClick={() => handleLogOut(setIsLogin)}
        />
      ) : (
        <Box sx={{ width: "182px", height: "40px" }} />
      )}
      <IconButton
        onClick={() => handleDrawerClose(setIsOpen)}
        sx={{ ...(isOpen == false && { display: "none" }) }}
      >
        <ChevronLeftIcon />
      </IconButton>
    </Box>
  );
};

export default OpenedBarTopLogoutBar;
