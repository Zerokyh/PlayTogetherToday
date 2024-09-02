import { Box, Button, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";

type MeetingButtonProps = {
  group?: string;
  type?: string;
  count?: string;
  position?: string;
  comming?: string;
  group_anni?: string;
  onClick?: () => void;
};

const Myroom_meeting_button = ({
  group,
  type,
  count,
  position,
  comming,
  group_anni,
  onClick,
}: MeetingButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#E5E5E5",
        borderRadius: "12px",
        padding: "8px",
        textAlign: "left",
        overflow: "hidden",
        textTransform: "none",
        color: "black",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "12px",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {group}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {type}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {count}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "12px",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {position}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {comming}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {group_anni}
        </Typography>
      </Box>
    </Button>
  );
};

export default Myroom_meeting_button;
