import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ContentsBox from "../components/molecules/ContentsBox";
import Grid from "@mui/material/Unstable_Grid2";
import { DashboardGridBox } from "../styles/mui";
import { dashBoardData } from "../constants/dashBoardData";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <DashboardGridBox>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // 컨텐츠가 여러 줄로 래핑되도록 설정
            justifyContent: "center", // 컨텐츠를 중앙에 정렬
            alignItems: "center", // 컨텐츠를 수직으로 중앙에 정렬
            gap: 0, // 아이템 사이의 간격 설정
          }}
        >
          {dashBoardData.slice(0, 4).map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 calc(50% - 10px)", // 2x2로 배치하기 위해 50% 너비 설정, 간격 계산
                boxSizing: "border-box", // 패딩과 마진을 고려한 크기 계산
                display: "flex",
                justifyContent: "center", // 개별 박스를 중앙에 배치
                p: 0,
                m: 0,
              }}
            >
              <ContentsBox
                img={item.img}
                subject={item.subject}
                introduce={item.introduce}
                introduce_add={item.introduce_add}
                href={item.href}
              />
            </Box>
          ))}
        </Box>
      </DashboardGridBox>
    </React.Fragment>
  );
};

export default Dashboard;
