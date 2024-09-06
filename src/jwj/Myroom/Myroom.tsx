import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Myroom_profile from "./Myroom_profile";
import Myroom_meeting_button from "./Myroom_meeting_button";
import Myroom_freindsList from "./Myroom_freindsList";
import Myroom_message from "./Myroom_message";
import { sizes } from "../../styles/sizes";
import { useNavigate } from "react-router-dom";
import ImgAvatar from "../../components/atom/ImgAvatar";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

const Myroom = () => {
  const navigate = useNavigate();

  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const news = () => {
    const phone = "1234-516";
    return phone;
  };

  //쪽지함 공개/비공개
  const MessageisPublic = false;
  //그룹함 공개/비공개
  const GroupisPublic = false;
  //친구리스트 공개/비공개
  const FreindsListisPublic = true;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        gap: 2,
        paddingY: "20px",
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
            <Myroom_profile
              info_name="연 락 처"
              info={news()}
              profileIsPublic={true}
            />
            <Myroom_profile
              info_name="이 메 일"
              info="asdfasd213@naver.com"
              profileIsPublic={true}
            />
            <Myroom_profile
              info_name="주 소"
              info="인천 부평구 "
              profileIsPublic={true}
            />
            <Myroom_profile info_name="그룹 직책" profileIsPublic={false} />
            <Myroom_profile info_name="개인 기념일" profileIsPublic={true} />
            <Myroom_profile info_name="그룹 기념일" profileIsPublic={false} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "35%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImgAvatar
            src="cat.jpg"
            alt="프로필"
            sx={{
              width: sizes.avatar.info,
              height: sizes.avatar.info,
              mx: "auto",
            }}
          />
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
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
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
        {FreindsListisPublic ? (
          <Box
            sx={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
            <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
            <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
            <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
            <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
          </Box>
        ) : (
          <Box>공개되지않습니다.</Box>
        )}
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
        {GroupisPublic ? (
          <Box
            sx={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Myroom_meeting_button
              group="그룹1"
              type="그룹 타입"
              count="그룹 멤버수"
              position="직책"
              comming="다가오는 모임 날짜"
              group_anni="그룹 기념일"
              onClick={() => navigate("/BorderDetail")}
            />
            <Myroom_meeting_button
              group="그룹2"
              type="그룹 타입"
              count="그룹 멤버수"
              position="직책"
              comming="다가오는 모임 날짜"
              group_anni="그룹 기념일"
            />
            <Myroom_meeting_button
              group="그룹3"
              type="그룹 타입"
              count="그룹 멤버수"
              position="직책"
              comming="다가오는 모임 날짜"
              group_anni="그룹 기념일"
            />
            <Myroom_meeting_button
              group="그룹4"
              type="그룹 타입"
              count="그룹 멤버수"
              position="직책"
              comming="다가오는 모임 날짜"
              group_anni="그룹 기념일"
            />
          </Box>
        ) : (
          <Box>공개되지않습니다.</Box>
        )}
      </Grid>

      <Grid
        container
        sx={{
          height: "100%",
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

        {MessageisPublic ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              overflowY: "auto",
            }}
          >
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
            <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
          </Box>
        ) : (
          <Box>공개되지않습니다.</Box>
        )}
      </Grid>
    </Box>
  );
};

export default Myroom;
