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
    setIsLogin(true);
  }, [setIsLogin]);

  return (
    <Drawer variant="permanent" open={isOpen}>
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
