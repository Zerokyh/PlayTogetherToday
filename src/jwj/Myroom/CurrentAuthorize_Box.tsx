import { Box } from "@mui/system";
import CurrentAuthorize_Button from "./CurrentAuthorize_Button";

type CurrentAuthorize_Box = {
  contents: string;
  authorize: boolean;
};
const CurrentAuthorize_Box = ({
  contents,
  authorize,
}: CurrentAuthorize_Box) => {
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
        <span>{contents}:</span>
      </Box>
      <CurrentAuthorize_Button authorize={authorize} />
    </Box>
  );
};

export default CurrentAuthorize_Box;
