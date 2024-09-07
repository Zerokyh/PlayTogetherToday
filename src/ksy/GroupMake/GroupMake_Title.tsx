import { Typography } from "@mui/material";
import { Box } from "@mui/system";


const GroupMake_Title = () => {

  return (
    <Typography
      sx={{
          width: "60%",
          padding: "20px",
          marginBottom: "10px",
          bgcolor: "#E5E5E5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          color: "#23374D",
          borderRadius: 6
      }}>
      새로운 인연이 시작되고 있어요
    </Typography>
  );
};

export default GroupMake_Title;

// <GroupMake_Title text="새로운 인연이 시작되고 있어요" />
// <GroupMake_EnterTitle text="모임에 초대받았어요"/>