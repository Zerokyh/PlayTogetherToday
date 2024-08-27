import { Box, ListItemText, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import ImgAvatar from "../../components/atom/ImgAvatar";
import { AvatarSize, OpenSideBarSettingButtonStyle } from "../../styles/mui";
import useThemeStore from "../../store/store";
import LinkedButton from "../../components/atom/LinkedButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OpenedBarTopIsLogin = () => {
  const { isLogin } = useThemeStore();
  const navigate = useNavigate();
  const [isGroup, setIsGroup] = useState(false);
  return (
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
        <ImgAvatar alt="Logo" src="/onlylogo.png" sx={{ ...AvatarSize }} />
      </Box>
      <Box>
        {isLogin ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItemText
                primary={`[]회원님`}
                primaryTypographyProps={{
                  fontSize: sizes.fontSize.small,
                }}
              />
              <LinkedButton
                type="contained"
                text="설정"
                sx={{
                  ...OpenSideBarSettingButtonStyle,
                }}
                href={"/MySetting"}
              />
            </Box>
            {isGroup ? (
              <ListItemText
                primary={`그룹 []의 호스트입니다.`}
                primaryTypographyProps={{ fontSize: sizes.fontSize.small }}
              />
            ) : (
              <Box>
                <ListItemText
                  primary={`아직 모임을 시작하지 않았네요!`}
                  primaryTypographyProps={{ fontSize: sizes.fontSize.small }}
                />
                <Box sx={{ ":hover": { cursor: "pointer" } }}>
                  <Typography
                    sx={{ ":hover": "" }}
                    onClick={() => {
                      navigate("/GroupMake");
                    }}
                  >
                    시작
                  </Typography>
                </Box>
              </Box>
            )}
          </>
        ) : (
          <>
            <ListItemText
              primary={`Play Together Today`}
              primaryTypographyProps={{ fontSize: sizes.fontSize.small }}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default OpenedBarTopIsLogin;
