import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import LogoIconBtn from "../../components/molecules/LogoIconBtn";
import { AvatarSize } from "../../styles/mui";

const ClosedBar = () => {
  const navigate = useNavigate();
  const { isLogin, isOpen } = useThemeStore();

  const menuItems = [
    { text: "마이룸", icon: <AccountCircleIcon />, link: "#" },
    { text: "채팅룸", icon: <ChatIcon />, link: "/Chat" },
    { text: "모임룸", icon: <GroupsIcon />, link: "#" },
    { text: "게임룸", icon: <SportsEsportsIcon />, link: "#" },
    { text: "홈으로", icon: <HomeIcon />, link: "/" },
  ];

  const listItemStyles = {
    minHeight: 48,
    justifyContent: isOpen ? "initial" : "center",
  };

  const listItemIconStyles = {
    height: "50px",
    minWidth: 0,
    mr: isOpen ? 3 : "auto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    fontWeight: 600,
  };

  return (
    <List sx={{ ...(isOpen && { display: "none" }) }}>
      <LogoIconBtn alt="Logo" src="/onlylogo.png" sx={{ ...AvatarSize }} />

      {isLogin &&
        menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.link)}
              sx={listItemStyles}
            >
              <ListItemIcon sx={listItemIconStyles}>
                {item.icon}
                {item.text}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}

      <Box sx={{ ...(isOpen && { display: "none" }), flexGrow: 1 }} />
      <List sx={{ ...(isOpen && { display: "none" }) }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton sx={listItemStyles}>
            <ListItemIcon sx={listItemIconStyles}>
              <LogoutIcon />
              로그아웃
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </List>
  );
};

export default ClosedBar;
