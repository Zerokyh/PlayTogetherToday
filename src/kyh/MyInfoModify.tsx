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
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [formValues, setFormValues] = React.useState<formValue>({
    nickname: "",
    phone: "",
    address: "",
    email: "",
    backupEmail: "",
    anniversary: "",
  });

  const [disabledFields, setDisabledFields] = React.useState({
    nickname: false,
    phone: false,
    address: false,
    email: false,
    backupEmail: false,
    anniversary: false,
  });

  const member_id = localStorage.getItem("member_id");

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/MyInfoModify/${member_id}`)
      // .get(
      //   `https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify/${member_id}`
      // )
      .then((response) => {
        const data = response.data.data;
        console.log("Fetched Data:", data);
        setFormValues((prevValues) => ({
          ...prevValues,
          nickname: data.member_nickname || "",
          phone: data.member_phone || "",
          address: data.member_address || "",
          email: data.member_email || "",
          backupEmail: data.member_2nd_email || "",
          anniversary: data.member_anniversary
            ? new Date(data.member_anniversary).toLocaleDateString()
            : "",
        }));
        setImageUrl(data.profile_image_url);
      })
      .catch((error) => {
        console.error("Error fetching user profile data:", error);
      });
  }, [member_id]);

  const handleInputChange =
    (key: keyof formValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      console.log(`Changing ${key} to:`, value);
      setFormValues((prevValues) => ({
        ...prevValues,
        [key]: value,
      }));
    };

  const handleToggle = (key: keyof formValue) => {
    setDisabledFields((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleModify = () => {
    axios
      .post(
        "http://localhost:8080/MyInfoModify",
        // .post(
        //   "https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify",
        {
          member_id: member_id,
          ...formValues,
        }
      )
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
          <Box sx={{ position: "relative", top: -40, left: 180 }}>
            <Typography
              sx={{ fontSize: sizes.fontSize.xlarge, fontWeight: 600 }}
            >
              개인정보 편집
            </Typography>
          </Box>
          <MySettingOutterBox>
            a
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2",
              }}
            >
              <MyInfoInnerBox sx={{ width: "377px" }}>
                <MyInfoProfileImage
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                />
                {Object.entries(infoData).map(([key, item]) => (
                  <Box sx={{ height: 60 }} key={key}>
                    <ChipTextBox titlename={item.titlename} />
                    <InputModifyBox
                      width="240px"
                      sx={InputMuiStyle}
                      value={formValues[key as keyof formValue]}
                      onChange={handleInputChange(key as keyof formValue)}
                      disabled={disabledFields[key as keyof formValue]}
                      onToggle={() => handleToggle(key as keyof formValue)}
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
