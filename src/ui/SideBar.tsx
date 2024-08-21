import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useThemeStore from "../store/store";
import { Drawer, DrawerHeader } from "../utils/func";
import ClosedBar from "./sidebar/ClosedBar";
import OpenedBar from "./sidebar/OpenedBar";

const SideBar = () => {
  const theme = useTheme();
  const { isOpen, setIsOpen, setIsLogin } = useThemeStore();
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    setIsLogin(true);
  }, [setIsLogin]);

  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mx: "auto", ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={handleDrawerClose}
          sx={{ ...(isOpen == false && { display: "none" }) }}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <ClosedBar />
      <OpenedBar />
    </Drawer>
  );
};

export default SideBar;
