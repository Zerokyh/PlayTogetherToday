import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { sizes } from "../styles/sizes";

type ScheduleListProps = {
  groupname: string;
  eventname: string;
  eventtime: string;
};

const ScheduleList = ({
  groupname,
  eventname,
  eventtime,
}: ScheduleListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 1,
      }}
    >
      <Typography sx={{ fontSize: sizes.fontSize.small }}>
        {groupname} - {eventname}
      </Typography>
      <Typography sx={{ fontSize: sizes.fontSize.small }}>
        {eventtime}
      </Typography>
    </Box>
  );
};

export default ScheduleList;
