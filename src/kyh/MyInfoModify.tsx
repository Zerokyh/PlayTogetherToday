import * as React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { FullPageBox, InputMuiStyle, MyInfoInnerBox } from "../styles/mui";
import { colors, theme } from "../styles/colors";
import ChipTextBox from "../components/atom/Text/ChipTextBox";
import { sizes } from "../styles/sizes";
import { infoData } from "../constants/myInfoModifyMenuData";
import { styled } from "@mui/material/styles";
import useThemeStore from "../store/store";
import MyInfoProfileImage from "./MyInfoProfileImage";
import InputModifyBox from "../components/atom/Input/InputModifyBox";
import BasicButton from "../components/atom/Button/BasicButton";
import axios from "axios";

type UserProfileData = {
  member_id: number;
  member_nickname: string;
  member_phone: string;
  member_address: string;
  member_email: string;
  member_2nd_email: string;
  member_anniversary: Date | string;
};

const MyInfoModify = () => {
  const { isTheme } = useThemeStore();
  const [userProfileData, setUserProfileData] =
    React.useState<UserProfileData | null>(null);
  const [member_id, setMemberId] = React.useState<number | null>(null);
  const [formValues, setFormValues] = React.useState<Record<string, string>>({
    nickname: "",
    phone: "",
    address: "",
    email: "",
    backupEmail: "",
    anniversary: "",
  });

  React.useEffect(() => {
    // Spring Boot API 호출
    axios
      .get("http://localhost:8080/MyInfoModify/1")
      .then((response) => {
        console.log(response.data);
        setUserProfileData(response.data.data);
        setMemberId(response.data.data.member_id.toString());
        localStorage.setItem(
          "user_id",
          response.data.data.member_id.toString()
        );
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
      });
  }, []);

  const handleInputChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [key]: event.target.value,
      });
    };

  const getPlaceholder = (key: string) => {
    switch (key) {
      case "nickname":
        return userProfileData?.member_nickname ?? "";
      case "phone":
        return userProfileData?.member_phone ?? "";
      case "address":
        return userProfileData?.member_address ?? "";
      case "email":
        return userProfileData?.member_email ?? "";
      case "backupEmail":
        return userProfileData?.member_2nd_email ?? "";
      case "anniversary":
        return userProfileData?.member_anniversary
          ? new Date(userProfileData.member_anniversary).toLocaleDateString()
          : "";
      default:
        return "";
    }
  };

  const handleModify = () => {
    axios
      .post("http://localhost:8080/MyInfoModify", {
        member_id: member_id,
        ...formValues,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
      });
  };

  const MySettingOutterBox = styled(Box)({
    backgroundColor:
      isTheme == "기본"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    minWidth: 500,
    minHeight: 640,
    borderRadius: sizes.borderRadius.medium,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 0,
    position: "relative",
    top: -18,
  });

  return (
    <ThemeProvider theme={theme}>
      <FullPageBox>
        <Box sx={{ maxWidth: "1280px" }}>
          <Box
            sx={{
              position: "relative",
              top: -40,
              left: 180,
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.xlarge, fontWeight: 600 }}
            >
              개인정보 편집
            </Typography>
          </Box>
          <MySettingOutterBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2",
              }}
            >
              <MyInfoInnerBox sx={{ width: "377px" }}>
                <MyInfoProfileImage />
                {userProfileData &&
                  Object.entries(infoData).map(([key, item]) => (
                    <Box sx={{ height: 60 }} key={key}>
                      <ChipTextBox titlename={item.titlename} />
                      <InputModifyBox
                        width="240px"
                        sx={InputMuiStyle}
                        value={formValues[key] || getPlaceholder(key)}
                        onChange={handleInputChange(key)}
                      />
                    </Box>
                  ))}
                <BasicButton
                  text="변경하기"
                  sx={{ borderRadius: sizes.borderRadius.medium }}
                  onClick={handleModify}
                />
              </MyInfoInnerBox>
            </Box>
          </MySettingOutterBox>
        </Box>
      </FullPageBox>
    </ThemeProvider>
  );
};

export default MyInfoModify;
