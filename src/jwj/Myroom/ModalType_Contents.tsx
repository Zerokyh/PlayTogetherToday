import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

type ModalType_ContentsProps = {
  content: string;
  handleClose: () => void;
};

const ModalType_Contents = ({
  content,
  handleClose,
}: ModalType_ContentsProps) => {
  return (
    <Box
      onClick={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {content}
      </Typography>
    </Box>
  );
};

export default ModalType_Contents;
