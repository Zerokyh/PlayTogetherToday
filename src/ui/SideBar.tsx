import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import useThemeStore from "../store/store";
import ClosedBar from "./sidebar/ClosedBar";
import OpenedBar from "./sidebar/OpenedBar";
import { Box } from "@mui/material";
import { Drawer, DrawerHeader, SideBarLogoStyle } from "../styles/mui";
import { handleDrawerOpen } from "../utils/func";

const SideBar = () => {
  const { isOpen, setIsOpen, setIsLogin } = useThemeStore();

  React.useEffect(() => {
    setIsLogin(false);
  }, [setIsLogin]);

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        position: "fixed", // 사이드바 고정
        zIndex: 100,
        width: isOpen ? "300px" : "60px", // 사이드바의 열림과 닫힘에 따른 너비 조정
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isOpen ? "300px" : "60px", // Drawer paper의 너비도 동일하게 설정
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader sx={{ ...(isOpen && { display: "none" }) }}>
        <Box
          sx={{
            ...SideBarLogoStyle,
            ...(isOpen && { display: "none" }),
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleDrawerOpen(setIsOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </DrawerHeader>
      <ClosedBar />
      <OpenedBar />
    </Drawer>
  );
};

export default SideBar;
