import { Box } from "@mui/system";
import { ReactNode } from "react";

type CenteredOutletProps = {
  children: ReactNode;
};

const CenteredOutlet = ({ children }: CenteredOutletProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1280px",
        width: "1280px",
        maxHeight: "700px",
        height: "700px",
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredOutlet;
