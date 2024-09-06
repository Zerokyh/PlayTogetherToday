import { Box } from "@mui/material";
import GroupMemberList from "./GroupMemberList";

const GroupMemberBox = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        width: 214,
        height: 180,
        my: 1,
      }}
    >
      <GroupMemberList imgsrc="cat.jpg" nickname="동글동글" position="모임장" />
      <GroupMemberList
        imgsrc="profile_icon.png"
        nickname="네모네모"
        position="총무"
      />
      <GroupMemberList imgsrc="" nickname="세모세모" position="멤버" />
    </Box>
  );
};

export default GroupMemberBox;
