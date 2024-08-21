import * as React from "react";
import useThemeStore from "../../store/store";
import { Box, Button, List } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import ImgAvatar from "../../components/atom/ImgAvatar";
import LinkedButton from "../../components/atom/LinkedButton";
import Calendar from "../../components/organism/Calendar";
import { AvatarSize, SkeletonMini, SkeletonNormal } from "../../styles/mui";
import { sizes } from "../../styles/sizes";
import NotLoginButton from "../../components/molecules/NotLoginButton";
import TextButton from "../../components/atom/TextButton";
import SelectDropDown from "../../components/molecules/SelectDropDown";
import TextCard from "../../components/atom/TextCard";

const OpenedBar = () => {
  const { isLogin, isOpen } = useThemeStore();
  return (
    <>
      <List sx={{ ...(isOpen == false && { display: "none" }) }}>
        <Box>
          {isLogin ? <TextButton text="로그아웃" /> : <Box />}
          <Divider
            variant="middle"
            component="li"
            sx={{ position: "relative", top: -7 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              py: sizes.padding.large,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
              }}
            >
              <ImgAvatar
                alt="Logo"
                src="/onlylogo.png"
                sx={{ ...AvatarSize }}
              />
            </Box>
            <Box>
              {isLogin ? (
                <>
                  <ListItemText
                    primary={`[]회원님`}
                    primaryTypographyProps={{ fontSize: sizes.fontSize.medium }}
                  />
                  <ListItemText
                    primary={`그룹 []의 호스트입니다.`}
                    primaryTypographyProps={{ fontSize: sizes.fontSize.medium }}
                  />
                </>
              ) : (
                <>
                  <ListItemText
                    primary={`Play Together Today`}
                    primaryTypographyProps={{ fontSize: sizes.fontSize.medium }}
                  />
                </>
              )}
            </Box>
          </Box>
          {isLogin ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <SelectDropDown />
                {/* <Button
            sx={{
              width: 100,
              height: 40,
              color: "black",
              fontWeight: 600,
              border: "1px solid #C0C0C0",
              fontSize: 12,
            }}
          >
            새로운 모임
          </Button> */}
                <LinkedButton text="새로운 모임" />
              </Box>
              <Skeleton variant="rounded" sx={{ ...SkeletonNormal }} />
              <Box sx={{ height: 130, display: "flex", alignItems: "center" }}>
                <Grid
                  container
                  spacing={0}
                  sx={{ gap: 2, justifyContent: "center" }}
                >
                  <Grid item xs={5} md={5}>
                    <Button
                      sx={{
                        width: 100,
                        height: 40,
                        color: "black",
                        fontWeight: 600,
                        border: "1px solid #C0C0C0",
                        fontSize: 12,
                      }}
                    >
                      마이룸
                    </Button>
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <LinkedButton text="채팅룸" href="/Chat" />
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <LinkedButton text="모임룸" />
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <LinkedButton text="게임룸" />
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              <NotLoginButton />
            </>
          )}
          <Box>
            <Calendar />
          </Box>
          <Box>
            {isLogin ? (
              <Skeleton variant="rounded" sx={{ ...SkeletonMini }} />
            ) : (
              <TextCard text="소모임은 여러분들의 갓생살기의 도우미입니다." />
            )}
          </Box>
        </Box>
      </List>
    </>
  );
};

export default OpenedBar;
