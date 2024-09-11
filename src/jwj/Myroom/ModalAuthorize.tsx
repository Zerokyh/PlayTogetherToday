import { useState } from "react";
import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ModalAuthorize_Box from "./ModalAuthorize_Box";
import ModalType_Authorize from "./ModalType_Authorize";
import CurrentAuthorize_Box from "./CurrentAuthorize_Box";

type ModalAuthorizeProps = {
  content: string;
  handleClose: () => void;
};

const ModalAuthorize = ({ content, handleClose }: ModalAuthorizeProps) => {
  const [showAuthorizeModal, setShowAuthorizeModal] = useState(false);

  const handleShowAuthorizeModal = () => {
    setShowAuthorizeModal(true);
  };

  const handleCloseAuthorizeModal = () => {
    setShowAuthorizeModal(false);
  };

  return showAuthorizeModal ? (
    <ModalType_Authorize
      handleCloseAuthorizeModal={handleCloseAuthorizeModal}
      content={content}
    />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {content}
      </Typography>
      <Typography
        sx={{ width: "100%", display: "flex", justifyContent: "start" }}
      >
        현재 권한:
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CurrentAuthorize_Box contents="연락처" authorize={true} />
          <CurrentAuthorize_Box contents="이메일" authorize={false} />
          <CurrentAuthorize_Box contents="주소" authorize={true} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CurrentAuthorize_Box contents="그룹직책" authorize={true} />
          <CurrentAuthorize_Box contents="그룹기념일" authorize={false} />
          <CurrentAuthorize_Box contents="개인기념일" authorize={false} />
        </Box>
      </Box>
      <Link
        component="button"
        variant="body2"
        onClick={handleShowAuthorizeModal}
      >
        상세설정
      </Link>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button onClick={handleClose} variant="outlined" size="small">
          확인
        </Button>
      </Box>
    </Box>
  );
};

export default ModalAuthorize;
