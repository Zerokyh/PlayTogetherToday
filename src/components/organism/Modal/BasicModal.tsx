import * as React from "react";
import { Box, Modal } from "@mui/material";
import BasicForm, { BasicFormProps } from "../../molecules/modal/BasicForm";
import { sizes } from "../../../styles/sizes";

type BasicModalProp = {
  open: boolean;
  handleClose: () => void;
  basicformprops: BasicFormProps;
};

const BasicModal = ({ open, handleClose, basicformprops }: BasicModalProp) => {
  // modal
  const ModalMuiStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 330,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: sizes.borderRadius.small,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...ModalMuiStyle }}>
        <BasicForm {...basicformprops} />
      </Box>
    </Modal>
  );
};

export default BasicModal;
