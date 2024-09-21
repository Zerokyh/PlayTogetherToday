import * as React from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { sizes } from "../styles/sizes";
import { colors } from "../styles/colors";
import ImgAvatar from "../components/atom/Avatar/ImgAvatar";
import LoadingSpiner from "../components/atom/Loading/LoadingSpinner";
import axios from "axios";

type MyInfoProfileImageProps = {
  imageUrl: string;
  setImageUrl: (url: string) => void;
};

const MyInfoProfileImage = ({
  imageUrl,
  setImageUrl,
}: MyInfoProfileImageProps) => {
  const [loading, setLoading] = React.useState<boolean>(false); // 로딩 상태
  const [uploadSuccess, setUploadSuccess] = React.useState<boolean>(false); // 업로드 성공 여부
  const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false); // 스낵바 상태

  const apiKey = "71fd1a030761c873bc2c144f69ce00e0"; // 자신의 API 키

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      await handleUpload(file); // 파일 선택 후 업로드 호출
    }
  };

  const handleUpload = async (file: File) => {
    setLoading(true); // 로딩 시작
    const formData = new FormData();
    formData.append("image", file); // 선택된 파일을 FormData로 추가

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response); // 응답 전체 로그 출력

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response Data:", data); // 서버에서 받은 응답 로그

      if (data.success) {
        setImageUrl(data.data.url);
        setUploadSuccess(true);
        setOpenSnackbar(true);

        const member_id = localStorage.getItem("member_id");
        if (member_id) {
          const saveResponse = await axios.post(
            `http://localhost:8080/MyInfoModify/${member_id}/saveProfileImage`,
            {
              profileImageUrl: data.data.url,
            },
            {
              withCredentials: true, // 필요에 따라 설정
            }
          );

          if (saveResponse.status === 200) {
            console.log("Profile image URL saved successfully.");
          } else {
            setUploadSuccess(false);
            console.error("Failed to save profile image URL:", saveResponse);
          }
        } else {
          setUploadSuccess(false);
          console.error("Member ID not found in localStorage.");
        }
      } else {
        setUploadSuccess(false);
        console.error("Image upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error); // 에러 로그
      setUploadSuccess(false); // 실패 상태
      setOpenSnackbar(true); // 스낵바 열기
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 선택 창 열기
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // 스낵바 닫기
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        paddingBottom: 6,
      }}
    >
      <Box sx={{ position: "relative" }}>
        {loading ? (
          <LoadingSpiner
            color={colors.text.primary}
            loading={loading}
            boxWidth={sizes.avatar.info}
            boxHeight={sizes.avatar.info}
          />
        ) : imageUrl ? (
          <ImgAvatar
            src={imageUrl} // 업로드된 이미지 URL
            alt="프로필"
            sx={{
              width: sizes.width.info,
              height: sizes.avatar.info,
              borderRadius: sizes.borderRadius.none,
              objectFit: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
            }}
          />
        ) : (
          <ImgAvatar
            src="onlylogo.png" // 기본 프로필 이미지
            alt="프로필"
            sx={{
              width: sizes.width.default_info,
              height: sizes.avatar.info,
              borderRadius: sizes.borderRadius.none,
              objectFit: "contain",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
            }}
          />
        )}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }} // 숨겨진 파일 선택 창
          onChange={handleFileChange} // 파일 선택 후 바로 업로드
        />
        <Box
          sx={{
            position: "absolute",
            top: 90,
            right: 20,
            color: colors.text.primary,
            ":hover": {
              cursor: "pointer",
              color: colors.text.secondary,
            },
          }}
          onClick={handleEditClick} // EditIcon 클릭 시 파일 선택 창 열기
        >
          <EditIcon />
        </Box>
      </Box>

      {/* 업로드 완료 또는 실패를 알리기 위한 Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        {uploadSuccess === true ? (
          <Alert onClose={handleSnackbarClose} severity="success">
            이미지 업로드 성공!
          </Alert>
        ) : (
          <Alert onClose={handleSnackbarClose} severity="error">
            이미지 업로드 실패!
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default MyInfoProfileImage;
