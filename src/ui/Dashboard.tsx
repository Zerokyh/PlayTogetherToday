import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ContentsBox from "../components/organism/Dashboard/ContentsBox";
import { DashboardGridBox } from "../styles/mui";
import { dashBoardData } from "../constants/dashBoardData";
import { Box, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <DashboardGridBox>
        <Grid container spacing={1}>
          {dashBoardData.map((item, index) => (
            <Grid item xs={12} sm={12} md={8} lg={6} key={index}>
              <ContentsBox {...item} />
            </Grid>
          ))}
        </Grid>
      </DashboardGridBox>
    </React.Fragment>
  );
};

export default Dashboard;
