import { Box, ListItemText } from "@mui/material";
import { sizes } from "../../styles/sizes";
import ImgAvatar from "../../components/atom/ImgAvatar";
import { AvatarSize, OpenSideBarSettingButtonStyle } from "../../styles/mui";
import useThemeStore from "../../store/store";
import LinkedButton from "../../components/atom/LinkedButton";

const OpenedBarTopIsLogin = () => {
  const { isLogin } = useThemeStore();
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

            <ListItemText
              primary={`그룹 []의 호스트입니다.`}
              primaryTypographyProps={{ fontSize: sizes.fontSize.small }}
            />
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
