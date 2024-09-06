import ListItem from "@mui/material/ListItem";

import { Typography } from "@mui/material";

type GetGroupBirthProps = {
  birthName?: string;
  birthday?: string;
};

const GetGroupBirth = ({ birthName, birthday }: GetGroupBirthProps) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "12px" }} variant="inherit">
        {birthName}
      </Typography>
      <Typography sx={{ fontSize: "12px" }} variant="inherit">
        {birthday}
      </Typography>
    </ListItem>
  );
};

export default GetGroupBirth;
