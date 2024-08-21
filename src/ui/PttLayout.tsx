import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";

const PttLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar /> {/* 사이드바 등록 */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet /> {/* 페이지가 바뀔 공간 등록 */}
      </Box>
    </Box>
  );
};

export default PttLayout;
