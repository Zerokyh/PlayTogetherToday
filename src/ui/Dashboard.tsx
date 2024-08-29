import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ContentsBox from "../components/molecules/ContentsBox";
import Grid from "@mui/material/Unstable_Grid2";
import { DashboardGridBox } from "../styles/mui";
import { dashBoardData } from "../constants/dashBoardData";

const Dashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <DashboardGridBox>
        <Grid container spacing={{ xs: 6, md: 6 }} columns={12}>
          {dashBoardData.map((item, index) => (
            <Grid
              xs={12}
              sm={12}
              md={6}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ContentsBox
                img={item.img}
                subject={item.subject}
                introduce={item.introduce}
                introduce_add={item.introduce_add}
                href={item.href}
              />
            </Grid>
          ))}
        </Grid>
      </DashboardGridBox>
    </React.Fragment>
  );
};

export default Dashboard;
