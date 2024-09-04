import { Box } from "@mui/material";
import BasicButton from "../../atom/BasicButton";

export type RegisterFormProps = {
  title?: string;
  yesBtnText?: string;
  noBtnText?: string;
  handleClose?: () => void;
};

const RegisterForm = ({
  title = "주제를 정해주세요",
  yesBtnText = "등록",
  noBtnText = "아니오",
  handleClose,
}: RegisterFormProps) => {
  const ModalFormStyle = {
    width: "330px",
    height: "100px",
    display: "flex",
    alignContent: "center",
  };
  const ButtonStyle = {
    width: "160px",
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
          <BasicButton
            variant="text"
            textcolor="primary"
            bgcolor="drawer"
            text={noBtnText}
            sx={{ ...ButtonStyle }}
            onClick={handleClose}
          />
          <BasicButton
            variant="contained"
            text={yesBtnText}
            sx={{ ...ButtonStyle }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
