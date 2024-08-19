import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./ui/SideBar";

const PttLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default PttLayout;
