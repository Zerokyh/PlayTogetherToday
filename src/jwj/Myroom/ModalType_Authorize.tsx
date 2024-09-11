import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ModalAuthorize_Box from "./ModalAuthorize_Box";
type ModalType_AuthorizeProps = {
  content: string;
  handleCloseAuthorizeModal: () => void;
};

const ModalType_Authorize = ({
  content,
  handleCloseAuthorizeModal,
}: ModalType_AuthorizeProps) => {
  return (
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
        개인정보 공개 상세 설정
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
          <ModalAuthorize_Box contents="연락처" />
          <ModalAuthorize_Box contents="이메일" />
          <ModalAuthorize_Box contents="주소" />
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
          <ModalAuthorize_Box contents="그룹직책" />
          <ModalAuthorize_Box contents="그룹기념일" />
          <ModalAuthorize_Box contents="개인기념일" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button
          onClick={handleCloseAuthorizeModal}
          variant="outlined"
          size="small"
        >
          확인
        </Button>
        <Button
          onClick={handleCloseAuthorizeModal}
          variant="outlined"
          size="small"
        >
          뒤로가기
        </Button>
      </Box>
    </Box>
  );
};

export default ModalType_Authorize;
