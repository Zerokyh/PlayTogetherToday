import * as React from "react";
import { Box, Modal } from "@mui/material";
import RegisterForm, {
  RegisterFormProps,
} from "../../molecules/modal/RegisterForm";

type RegisterModalProp = {
  open: boolean;
  handleClose: () => void;
  registerformprops: RegisterFormProps;
};

const RegisterModal = ({
  open,
  handleClose,
  registerformprops,
}: RegisterModalProp) => {
  // modal
  const ModalMuiStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 330,
    bgcolor: "background.paper",
    boxShadow: 24,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...ModalMuiStyle }}>
        <RegisterForm {...registerformprops} />
      </Box>
    </Modal>
  );
};

export default RegisterModal;
