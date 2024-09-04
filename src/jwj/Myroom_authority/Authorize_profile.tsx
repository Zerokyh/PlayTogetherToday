import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Authorize_button from "./ProfileAuthorize_button";
import { sizes } from "../../styles/sizes";
import ProfileAuthorize_button from "./ProfileAuthorize_button";

type profile_props = {
  info_name?: string;
  isAllPublic: boolean | null;
  setIsAllPublic: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const Authorize_profile = ({
  info_name,
  isAllPublic,
  setIsAllPublic,
}: profile_props) => {
  const [selectedButton, setSelectedButton] = useState<boolean | null>(
    isAllPublic
  );

  // isAllPublic 값이 변경될 때마다 selectedButton 상태를 업데이트
  useEffect(() => {
    if (isAllPublic !== null) {
      setSelectedButton(isAllPublic);
    }
  }, [isAllPublic]);

  const handleButtonClick = (value: boolean) => {
    setSelectedButton(value);
    setIsAllPublic(null); // 개별 버튼이 클릭되면 전체 상태와의 동기화를 해제
  };
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#E5E5E5",
        color: "#000",
        fontSize: sizes.fontSize.medium,
        borderRadius: "4px",
        paddingX: "8px",
        display: "flex",
        alignItems: "center",
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
