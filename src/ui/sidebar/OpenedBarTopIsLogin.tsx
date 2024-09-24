import * as React from "react";
import { Box, ListItemText, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import { AvatarSize, OpenSideBarSettingButtonStyle } from "../../styles/mui";
import useThemeStore from "../../store/store";
import LinkedButton from "../../components/atom/Button/LinkedButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../styles/colors";
import ImgAvatar from "../../components/atom/Avatar/ImgAvatar";
import axios from "axios";

type formValue = {
  nickname: string;
};

const OpenedBarTopIsLogin = () => {
  const { isLogin } = useThemeStore();
  const navigate = useNavigate();
  const [isGroup, setIsGroup] = useState(false);

  const [formValues, setFormValues] = React.useState<formValue>({
    nickname: "",
  });

  const member_id = localStorage.getItem("member_id");

  React.useEffect(() => {
    axios
      // .get(`http://localhost:8080/MyInfoModify/${member_id}`)
      .get(
        `https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify/${member_id}`
      )
      .then((response) => {
        const data = response.data.data;
        setFormValues({
          nickname: data.member_nickname || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile data:", error);
      });
  }, [member_id]);

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
                position: "relative",
              }}
            >
              <ListItemText
                primary={`${formValues.nickname}회원님`}
                primaryTypographyProps={{
                  fontSize: sizes.fontSize.small,
                }}
              />
              <LinkedButton
                variantType="contained"
                text="설정"
                textcolor="secondary"
                bgcolor="button"
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ListItemText
                  primary={`아직 모임을 시작하지 않았네요!`}
                  primaryTypographyProps={{ fontSize: sizes.fontSize.small }}
                />
                <Box
                  sx={{
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  <Typography
                    sx={{ ":hover": "" }}
                    onClick={() => {
                      navigate("/GroupMake");
                    }}
                    color={colors.background.button}
                  >
                    [시작]
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
