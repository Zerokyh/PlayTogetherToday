import Button from "@mui/material/Button";

const Profile_TotalButton = () => {
  return (
    <div className="flex gap-1">
      <Button
        sx={{
          fontSize: "8px",
          width: "80px",
          minWidth: "80px",
          height: "10px",
          padding: 1,
        }}
        variant="outlined"
      >
        전체공개/비공개
      </Button>
    </div>
  );
};

export default Profile_TotalButton;
