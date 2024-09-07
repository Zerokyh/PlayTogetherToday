import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GroupMake_SubTitle = () => {
  const navigate = useNavigate();

  return (
    <Typography
        onClick={() => navigate("/GroupEnter")}
        sx={{
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
          width: "60%",
          padding: "20px",
          marginBottom: "18.5px",
          bgcolor: "#E5E5E5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          color: "#23374D",
          borderRadius: 6,
        }}>
        모임에 초대받았어요
      </Typography>
  );
};

export default GroupMake_SubTitle;

// <GroupMake_Title text="새로운 인연이 시작되고 있어요" />
// <GroupMake_EnterTitle text="모임에 초대받았어요"/>