import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { sizes } from "../../styles/sizes";
import Authorize_button from "./Authorize_button";
import Authorize_profile from "./Authorize_profile";
import Profile_TotalButton from "./Profile_TotalButton";
import Myroom_message from "../Myroom/Myroom_message";
import { Avatar } from "@mui/material";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

const Myroom_authority = () => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const [isAllPublic, setIsAllPublic] = React.useState<boolean | null>(null);

  // Profile_TotalButton을 클릭할 때 호출되는 함수
  const toggleAllProfiles = () => {
    setIsAllPublic((prev) => (prev === true ? false : true));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        gap: 2,
      }}
    >
      <Grid
        container
        sx={{
          gridColumn: "span 2",
          gridRow: "span 3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 2,
            gap: 2,
          }}
        >
          <Box
            sx={{
              height: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: sizes.fontSize.large }}>
              닉네임
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: sizes.fontSize.medium }}
            >
              그룹 총(N) 활동중입니다.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Authorize_profile
              info_name="연 락 처"
              isAllPublic={isAllPublic}
              setIsAllPublic={setIsAllPublic}
              member_id={1}
            />
            <Authorize_profile
              info_name="이 메 일"
              isAllPublic={isAllPublic}
              setIsAllPublic={setIsAllPublic}
              member_id={1}
            />
            <Authorize_profile
              info_name="주 소"
              isAllPublic={isAllPublic}
              setIsAllPublic={setIsAllPublic}
              member_id={1}
            />
            <Authorize_profile
              info_name="그룹 직책"
              isAllPublic={isAllPublic}
              setIsAllPublic={setIsAllPublic}
              member_id={1}
            />
            <Authorize_profile
              info_name="개인 기념일"
              isAllPublic={isAllPublic}
              setIsAllPublic={setIsAllPublic}
              member_id={1}
            />
            <Authorize_profile
              info_name="그룹 기념일"
              isAllPublic={isAllPublic}
              setIsAllPublic={setIsAllPublic}
              member_id={1}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "35%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Profile_TotalButton toggleAllProfiles={toggleAllProfiles} />
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              bgcolor: "purple.200",
            }}
          >
            <Authorize_button />
          </Paper>
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          gridColumn: "span 2",
          gridRow: "span 4",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.xlarge,
            fontWeight: "bold",
            backgroundColor:
              isTheme == ("기본" as ThemeType)
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            borderRadius: "16px",
          }}
        >
          친구리스트
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Authorize_button />
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          gridColumn: "span 2",
          gridRow: "span 5",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "96px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.xlarge,
            fontWeight: "bold",
            backgroundColor:
              isTheme == ("기본" as ThemeType)
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            borderRadius: "16px",
          }}
        >
          나의 모임
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Authorize_button />
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          gridColumn: "span 2",
          gridRow: "span 4",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "96px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.xlarge,
            fontWeight: "bold",
            backgroundColor:
              isTheme == ("기본" as ThemeType)
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            borderRadius: "16px",
          }}
        >
          쪽지함
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Authorize_button />
        </Box>
      </Grid>
    </Box>
  );
};

export default Myroom_authority;
