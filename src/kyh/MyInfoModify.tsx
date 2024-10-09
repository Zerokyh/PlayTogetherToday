import * as React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import {
  FullPageBox,
  InputMuiStyle,
  MyInfoInnerBox,
  MySettingOutterBox,
} from "../styles/mui";
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

const MyInfoModify = () => {
  const { isTheme } = useThemeStore();
  const [imageUrl, setImageUrl] = React.useState<string>("");

  // 모든 입력 필드를 위한 단일 상태 객체 관리
  const [formData, setFormData] = React.useState({
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
    const fetchData = async () => {
      try {
        const member_id = localStorage.getItem("member_id"); // member_id를 가져옵니다.
        const response = await axios.get(
          // `http://localhost:8080/MyInfoModify/${member_id}`
          `https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify/${member_id}`
        );
        const data = response.data.data;
        console.log("Fetched Data:", data);

        setFormData({
          nickname: data.member_nickname || "",
          phone: data.member_phone || "",
          address: data.member_address || "",
          email: data.member_email || "",
          backupEmail: data.member_2nd_email || "",
          anniversary: data.member_anniversary
            ? new Date(data.member_anniversary).toLocaleDateString()
            : "",
        });
        setImageUrl(data.profile_image_url);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    console.log(`변경된 폼데이터값 : `, formData);
  }, [formData]); // formData가 변경될 때마다 실행

  const handleInputChange =
    (key: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(`Changing ${key} to:`, event.target.value);
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [key]: value })); // 상태 객체 업데이트
    };

  const handleToggle = (key: keyof typeof disabledFields) => {
    setDisabledFields((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleModify = () => {
    console.log(formData);
    axios
      // .post(
      // "http://localhost:8080/MyInfoModify",
      .post(
        "https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify",
        {
          member_id: member_id,
          member_nickname: formData.nickname,
          member_phone: formData.phone,
          member_address: formData.address,
          member_email: formData.email,
          member_2nd_email: formData.backupEmail,
          member_anniversary: formData.anniversary,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

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
                      value={formData[key as keyof typeof formData]}
                      onChange={handleInputChange(key as keyof typeof formData)}
                      onToggle={() =>
                        handleToggle(key as keyof typeof disabledFields)
                      }
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
