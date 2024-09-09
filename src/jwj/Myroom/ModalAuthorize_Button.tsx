import { Link } from "@mui/material";
import { Box } from "@mui/system";

const ModlaAuthorize_Button = () => {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        공개
      </Link>
      <span>/</span>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        비공개
      </Link>
    </Box>
  );
};

export default ModlaAuthorize_Button;
