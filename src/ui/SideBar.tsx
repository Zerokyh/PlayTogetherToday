import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useThemeStore from "../store/store";
import ClosedBar from "./sidebar/ClosedBar";
import OpenedBar from "./sidebar/OpenedBar";
import { Box } from "@mui/material";
import { Drawer, DrawerHeader } from "../styles/mui";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
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
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
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
