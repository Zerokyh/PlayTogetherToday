import { Box, Button } from "@mui/material";
import { GroupListBox } from "../styles/mui";
import GroupListItem from "./GroupListItem";

const BorderList = () => {
  return (
    <GroupListBox>
      <GroupListItem
        groupName="MIC로 소프트하게"
        groupInfo="노래를 사랑하는 사람들의 모임"
      ></GroupListItem>
    </GroupListBox>
  );
};

export default BorderList;
