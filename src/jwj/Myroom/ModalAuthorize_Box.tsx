import { Box } from "@mui/system";
import ModlaAuthorize_Button from "./ModalAuthorize_Button";

type ModalAuthorize_Box = {
  contents: string;
};

const ModalAuthorize_Box = ({ contents }: ModalAuthorize_Box) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <span>{contents}</span>
      </Box>
      <ModlaAuthorize_Button />
    </Box>
  );
};
export default ModalAuthorize_Box;
