import { Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";

type profile_props = {
  info_name?: string;
  info?: string;
  //   email?: string;
  //   address?: string;
  //   position?: string;
  //   own_anni ?: string;
  //   group_anni ?: string;
};

const Myroom_profile = ({ info_name, info }: profile_props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        bgcolor: "#E5E5E5",
        borderRadius: "8px",
        paddingX: "8px",
        flex: 1,
        minHeight: 0,
        maxHeight: "16.66%",
        gap: 0.5,
      }}
    >
      <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
        {info_name}:
      </Typography>
      <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
        {info}
      </Typography>
    </Box>
  );
};

export default Myroom_profile;
