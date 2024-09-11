import { Box, Checkbox, List, ListItem, Typography } from "@mui/material";
import { sizes } from "../styles/sizes";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

type AnnounceListProps = {
  title?: string;
  member?: string;
  checked?: boolean;
};

const AnnounceList = ({ title, member, checked }: AnnounceListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Checkbox checked={checked} />
      <ListItem
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgb(192 132 252)",
          paddingBottom: "2px",
          paddingX: sizes.padding.medium,
          gap: sizes.gap.medium,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: sizes.gap.normal,
              alignItems: "center",
            }}
          >
            <NotificationsActiveIcon />
            <Typography>{title}</Typography>
          </Box>
          <Typography>{member}</Typography>
        </Box>
      </ListItem>
    </Box>
  );
};
export default AnnounceList;
