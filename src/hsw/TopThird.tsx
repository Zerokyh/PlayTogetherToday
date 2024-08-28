import { Box } from "@mui/material";

const TopThird = () => {
  return (
    <>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: 4,
          bgcolor: "primary.light",
          padding: "10px",
        }}
      >
        <div className="text-2xl text-left">
          <p>TOP3</p>
        </div>
      </Box>
    </>
  );
};

export default TopThird;
