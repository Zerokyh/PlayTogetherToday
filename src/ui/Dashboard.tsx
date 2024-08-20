import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import ContentsBox from "../components/molecules/ContentsBox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { DashBoardData } from "../constants/DashBoardData";

const Dashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "95vh",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {DashBoardData.map((item, index) => (
              <Grid xs={6} sm={6} md={6} key={index}>
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
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
