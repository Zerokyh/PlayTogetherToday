import Button from "@mui/material/Button";

const Authorize_button = () => {
  return (
    <div className="flex gap-1">
      <Button
        sx={{
          fontSize: "10px",
          width: "40px",
          minWidth: "40px",
          height: "10px",
          padding: 1,
        }}
        variant="outlined"
      >
        공개
      </Button>
      <Button
        sx={{
          fontSize: "10px",
          width: "50px",
          minWidth: "50px",
          height: "10px",
          padding: 1,
        }}
        variant="outlined"
      >
        비공개
      </Button>
    </div>
  );
};

export default Authorize_button;
