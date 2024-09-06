import { List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
const GroupEventBox = () => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        paddingX: "0px",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          fontSize: "12px",
          justifyContent: "space-between",
          padding: "0px",
        }}
      >
        <Typography sx={{ fontSize: "12px" }} variant="inherit">
          물놀이
        </Typography>
        <Typography sx={{ fontSize: "12px" }} variant="inherit">
          월미도/19:00
        </Typography>
      </ListItem>
    </List>
  );
};

export default GroupEventBox;
