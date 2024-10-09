import * as React from "react";
import { Box, TextField, ThemeProvider, Typography } from "@mui/material";
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
import InputModifyBox from "../components/atom/Input/InputModifyBox";
import axios from "axios";
import LinkedButton from "../components/atom/Button/LinkedButton";
import MyInfoProfileImage from "../kyh/MyInfoProfileImage";

const TestInput = () => {
  const { isTheme } = useThemeStore();
  const [imageUrl, setImageUrl] = React.useState<string>("");

  // 각 입력 필드를 위한 개별 상태 관리
  const [nickname, setNickname] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [backupEmail, setBackupEmail] = React.useState<string>("");
  const [anniversary, setAnniversary] = React.useState<string>("");

  // const [disabledFields, setDisabledFields] = React.useState({
  //   nickname: false,
  //   phone: false,
  //   address: false,
  //   email: false,
  //   backupEmail: false,
  //   anniversary: false,
  // });

  const member_id = localStorage.getItem("member_id");

  const handleNickChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    console.log("Changing Nickname value to:", event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    console.log("Changing Phone value to:", event.target.value);
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    console.log("Changing Address value to:", event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log("Changing Email value to:", event.target.value);
  };
  const handleBackupEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackupEmail(event.target.value);
    console.log("Changing BackupEmail value to:", event.target.value);
  };
  const handleAnniversary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnniversary(event.target.value);
    console.log("Changing Anniversary value to:", event.target.value);
  };

  // const handleToggle = (key: keyof typeof disabledFields) => {
  //   setDisabledFields((prev) => ({
  //     ...prev,
  //     [key]: !prev[key],
  //   }));
  // };

  const handleModify = () => {
    const updatedData = {
      member_id: member_id,
      member_nickname: nickname,
      member_phone: phone,
      member_address: address,
      member_email: email,
      member_2nd_email: backupEmail,
      member_anniversary: anniversary,
    };

    console.log("Updating user data with:", updatedData); // 업데이트할 데이터 로그

    axios
      .post("http://localhost:8080/MyInfoModify", updatedData)
      // .post(
      //   "https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify",
      //   updatedData
      // )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const member_id = localStorage.getItem("member_id"); // member_id를 가져옵니다.
        const response = await axios.get(
          `http://localhost:8080/MyInfoModify/${member_id}`
          // `https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify/${member_id}`
        );
        const data = response.data.data;
        console.log("Fetched Data:", data);

        // 각 필드에 대해 상태를 업데이트합니다.
        setNickname(data.member_nickname || "");
        setPhone(data.member_phone || "");
        setAddress(data.member_address || "");
        setEmail(data.member_email || "");
        setBackupEmail(data.member_2nd_email || "");
        setAnniversary(
          data.member_anniversary
            ? new Date(data.member_anniversary).toLocaleDateString()
            : ""
        );
        setImageUrl(data.profile_image_url || "");
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchData();
  }, [member_id]);

  // const MySettingOutterBox = styled(Box)({
  //   backgroundColor:
  //     isTheme == "기본"
  //       ? colors.background.secondary
  //       : colors.sub_background.secondary,
  //   minWidth: 500,
  //   minHeight: 640,
  //   borderRadius: sizes.borderRadius.medium,
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 20,
  //   padding: 0,
  //   position: "relative",
  //   top: -18,
  // });

  React.useEffect(() => {
    console.log("Nickname state:", nickname);
    console.log("Phone state:", phone);
    console.log("Address state:", address);
    console.log("Email state:", email);
    console.log("Backup Email state:", backupEmail);
    console.log("Anniversary state:", anniversary);
  }, [nickname, phone, address, email, backupEmail, anniversary]);

  return (
    // <ThemeProvider theme={theme}>
    <FullPageBox>
      <Box sx={{ maxWidth: "1280px" }}>
        <Box sx={{ position: "relative", top: -40, left: 180 }}>
          <Typography sx={{ fontSize: sizes.fontSize.xlarge, fontWeight: 600 }}>
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

              <InputModifyBox
                type="text"
                width="240px"
                sx={InputMuiStyle}
                value={nickname}
                onChange={handleNickChange}
              />
              <InputModifyBox
                type="text"
                width="240px"
                sx={InputMuiStyle}
                value={phone}
                onChange={handlePhoneChange}
              />

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
        {/* 변경됨 */}
        <InputModifyBox
          type="text"
          width="240px"
          sx={InputMuiStyle}
          value={nickname}
          onChange={handleNickChange}
        />
        <InputModifyBox
          type="text"
          width="240px"
          sx={InputMuiStyle}
          value={phone}
          onChange={handlePhoneChange}
        />
      </Box>
    </FullPageBox>
    // </ThemeProvider>
  );
};

export default TestInput;
