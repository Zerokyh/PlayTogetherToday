import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import XIcon from "@mui/icons-material/X";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BorderProfile from "./BorderProfile";
import BorderDetailInfoImg from "./BorderDetailInfoImg";
import BorderParticipate from "./BorderParticipate";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";

type GroupMoneyPlusMinusProps = {
  profit?: boolean;
  countMoney?: number;
};

const GroupMoneyPlusMinus = ({
  profit,
  countMoney,
}: GroupMoneyPlusMinusProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: sizes.gap.medium,
          padding: "0px",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            borderBottom: "2px solid rgb(192 132 252)",
            paddingBottom: "2px",
            paddingX: "0px",
          }}
        >
          {profit ? (
            <AddCircleOutlineIcon />
          ) : (
            <RemoveCircleOutlineIcon sx={{ color: "red" }} />
          )}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>{profit ? "회비 수익" : "회비 지출"}</Typography>
            <Typography>{countMoney}원</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default GroupMoneyPlusMinus;
