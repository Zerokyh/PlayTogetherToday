import { Box, IconButton } from "@mui/material";
import { sizes } from "../../styles/sizes";
import LinkedButton from "../../components/atom/LinkedButton";
import useThemeStore from "../../store/store";
import { handleDrawerClose, handleLogOut } from "../../utils/func";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
          textcolor="grey"
          sx={{
            width: "100px",
            fontSize: sizes.fontSize.small,
            display: "flex",
            justifyContent: "center",
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
