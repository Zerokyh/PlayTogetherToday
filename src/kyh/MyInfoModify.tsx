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
import axios from "axios";
import { UserProfileData } from "../utils/type";
import LinkedButton from "../components/atom/Button/LinkedButton";

type formValue = {
  nickname: string;
  phone: string;
  address: string;
  email: string;
  backupEmail: string;
  anniversary: string;
};

const MyInfoModify = () => {
  const { isTheme } = useThemeStore();
  const [userProfileData, setUserProfileData] =
    React.useState<UserProfileData | null>(null);
  const [formValues, setFormValues] = React.useState<formValue>({
    nickname: "",
    phone: "",
    address: "",
    email: "",
    backupEmail: "",
    anniversary: "",
  });
  const [member_id, setMemberId] = React.useState<string | null>(null);
  const getMember_id = localStorage.getItem("member_id");

  // React.useEffect(() => {
  //   console.log("MyInfoModify rendered");
  // });

  // React.useEffect(() => {
  //   console.log("Form values updated:", formValues);
  // }, [formValues]);

  React.useEffect(() => {
    // Spring Boot API 호출
    axios
      .get(`http://localhost:8080/MyInfoModify/${getMember_id}`)
      .then((response) => {
        const data = response.data.data;
        setUserProfileData(data);
        setFormValues({
          nickname: data.member_nickname,
          phone: data.member_phone,
          address: data.member_address,
          email: data.member_email,
          backupEmail: data.member_2nd_email,
          anniversary: data.member_anniversary
            ? new Date(data.member_anniversary).toLocaleDateString()
            : "",
        });
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
      });
  }, []);

  const handleInputChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prevValues) => {
        const newValue = event.target.value;
        console.log(`Setting ${key} to ${newValue}`);
        return { ...prevValues, [key]: newValue };
      });
    };
  const handleModify = () => {
    console.log("Submitting:", { member_id, ...formValues });
    axios
      .post("http://localhost:8080/MyInfoModify", {
        member_id: member_id,
        ...formValues,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
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
                {Object.entries(infoData).map(([key, item]) => (
                  <Box sx={{ height: 60 }} key={key}>
                    <ChipTextBox titlename={item.titlename} />
                    <InputModifyBox
                      width="240px"
                      sx={InputMuiStyle}
                      value={formValues[key as keyof typeof formValues] || ""}
                      onChange={handleInputChange(key)}
                    />
                  </Box>
                ))}
                <LinkedButton
                  text="변경하기"
                  textcolor="secondary"
                  bgcolor="button"
                  variantType="contained"
                  sx={{
                    border: "0px",
                    width: "370px",
                    height: "40px",
                    fontSize: 24,
                  }}
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
