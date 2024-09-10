import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

type ModalType_NormalProps = {
  content: string;
  handleClose: () => void;
};

const ModalType_Normal = ({ content, handleClose }: ModalType_NormalProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {content}:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button onClick={handleClose} variant="outlined" size="small">
          승인
        </Button>
        <Button onClick={handleClose} variant="outlined" size="small">
          거절
        </Button>
      </Box>
    </Box>
  );
};

export default ModalType_Normal;
