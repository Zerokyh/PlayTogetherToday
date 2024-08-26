import { Box } from "@mui/material";
import BasicButton from "../atom/BasicButton";

type ModalInputBoxProps = {
  title?: string;
  yesBtnText?: string;
  noBtnText?: string;
};

const ModalInputBox = ({
  title = "주제를 정해주세요",
  yesBtnText = "등록",
  noBtnText = "아니오",
}: ModalInputBoxProps) => {
  const ModalFormStyle = {
    width: "330px",
    height: "100px",
    display: "flex",
    alignContent: "center",
  };
  const SecondaryButtonStyle = {
    width: "160px",
    bgcolor: "#F2F2F2",
    color: "black",
    "&:hover": {
      backgroundColor: "#b2bec3",
    },
    borderRadius: 0,
  };
  const ModalFormContentsStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    bgcolor: "#F3F3F3",
    px: "5px",
  };
  return (
    <Box
      sx={{
        ...ModalFormStyle,
      }}
    >
      <Box sx={{ ...ModalFormContentsStyle }}>
        <Box>{title}</Box>
        <Box>
          <BasicButton text={noBtnText} sx={{ ...SecondaryButtonStyle }} />
          <BasicButton
            text={yesBtnText}
            sx={{ width: "160px", borderRadius: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ModalInputBox;
