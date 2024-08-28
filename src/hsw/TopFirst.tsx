import { Box } from "@mui/material";

const TopFirst = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          bgcolor: "primary.light",
          padding: "10px",
        }}
      >
        <div className="text-2xl text-left">
          <p>TOP1</p>
        </div>
      </Box>
    </>
  );
};

export default TopFirst;
