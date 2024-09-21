import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Authorize_button from "./ProfileAuthorize_button";
import { sizes } from "../../styles/sizes";
import ProfileAuthorize_button from "./ProfileAuthorize_button";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";
import axios from "axios";

type profile_props = {
  info_name?: string;
  isAllPublic: boolean | null;
  setIsAllPublic: React.Dispatch<React.SetStateAction<boolean | null>>;
  member_id: number; // memberId 추가
};

const Authorize_profile = ({
  info_name,
  isAllPublic,
  setIsAllPublic,
  member_id,
}: profile_props) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const [selectedButton, setSelectedButton] = useState<boolean | null>(
    isAllPublic
  );

  // isAllPublic 값이 변경될 때마다 selectedButton 상태를 업데이트
  useEffect(() => {
    if (isAllPublic !== null) {
      setSelectedButton(isAllPublic);
    }
  }, [isAllPublic]);

  // info_name에 따라 API 필드명 결정
  const getFieldKey = () => {
    switch (info_name) {
      case "연 락 처":
        return "phoneAccess";
      case "이 메 일":
        return "emailAccess";
      case "주 소":
        return "addressAccess";
      case "그룹 직책":
        return "groupPositionAccess";
      case "개인 기념일":
        return "personalAnniversaryAccess";
      case "그룹 기념일":
        return "groupAnniversaryAccess";
      default:
        return null;
    }
  };

  const handleButtonClick = (value: boolean) => {
    setSelectedButton(value);
    setIsAllPublic(null); // 개별 버튼이 클릭되면 전체 상태와의 동기화를 해제

    const fieldKey = getFieldKey();
    if (fieldKey) {
      // API 호출하여 해당 필드 업데이트
      axios
        .put(`http://localhost:8080/${member_id}/update-access`, {
          [fieldKey]: value,
        })
        .then((response) => {
          console.log(response.data); // 성공 메시지
        })
        .catch((error) => {
          console.error("Error updating access:", error);
        });
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor:
          isTheme == ("기본" as ThemeType)
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
        color: "#000",
        fontSize: sizes.fontSize.medium,
        borderRadius: "4px",
        paddingX: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        flex: 1,
        minHeight: 0,
        maxHeight: "16.66%",
      }}
    >
      <span>{info_name}: </span>
      <ProfileAuthorize_button
        selectedButton={selectedButton}
        handleClick={handleButtonClick}
      />
    </Box>
  );
};

export default Authorize_profile;
