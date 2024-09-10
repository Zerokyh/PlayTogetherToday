import { CSSProperties } from "react";
import { Box } from "@mui/material";
import FadeLoader from "react-spinners/FadeLoader";

type LoadingSpinerProps = {
  loading: boolean;
  color?: string;
  height?: string | number;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

const LoadingSpiner = ({
  loading,
  color = "black",
  height = "652px",
}: LoadingSpinerProps) => {
  return (
    <Box
      sx={{
        height: { height },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default LoadingSpiner;
