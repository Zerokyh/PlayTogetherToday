import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ContentsBox from "../components/molecules/ContentsBox";
import Grid from "@mui/material/Unstable_Grid2";
import { dashBoardData } from "../constants/DashBoardData";
import { DashboardGridBox, FullPageBox } from "../styles/mui";

const Dashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <FullPageBox>
        <DashboardGridBox>
          <Grid container spacing={{ xs: 4, md: 6 }} columns={12}>
            {dashBoardData.map((item, index) => (
              <Grid
                xs={12}
                sm={6}
                md={6}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ContentsBox
                  index={index}
                  img={item.img}
                  subject={item.subject}
                  introduce={item.introduce}
                  introduce_add={item.introduce_add}
                />
              </Grid>
            ))}
          </Grid>
        </DashboardGridBox>
      </FullPageBox>
    </React.Fragment>
  );
};

export default Dashboard;
