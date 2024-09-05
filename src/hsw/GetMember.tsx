import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import MemberImg from "./MemberImg";
import { MemberImgAvatar } from "../styles/mui";
import { Typography } from "@mui/material";

type GetMemberProps = {
  profileImgSrc?: string;
  profileImgName?: string;
  memberName?: string;
  memberPosition?: string;
};

const GetMember = ({
  profileImgSrc,
  profileImgName,
  memberName,
  memberPosition,
}: GetMemberProps) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: "0px",
      }}
    >
      <ListItemAvatar
        sx={{
          minWidth: "0px",
          display: "flex",
          gap: "8px",
        }}
      >
        <MemberImg
          alt={profileImgName}
          src={profileImgSrc}
          sx={{ ...MemberImgAvatar }}
        />
        <Typography sx={{ fontWeight: "600" }} variant="inherit">
          {memberName}
        </Typography>
      </ListItemAvatar>
      <Typography sx={{ fontWeight: "600" }} variant="inherit">
        {memberPosition}
      </Typography>
    </ListItem>
  );
};
export default GetMember;
