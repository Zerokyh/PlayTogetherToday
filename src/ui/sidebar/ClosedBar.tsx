import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import LogoutIcon from "@mui/icons-material/Logout";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import LogoIconBtn from "../../components/molecules/Button/LogoIconBtn";
import { AvatarSize } from "../../styles/mui";
import {
  geListItemStyles,
  getListItemIconStyles,
  handleLogOut,
} from "../../utils/func";
import { menuData } from "../../constants/menuData";
import BasicIconButton from "../../components/molecules/Button/BasicIconButton";

const ClosedBar = () => {
  const navigate = useNavigate();
  const { isLogin, isOpen, setIsLogin } = useThemeStore();
  const listItemStyles = geListItemStyles(isOpen);
  const listItemIconStyles = getListItemIconStyles(isOpen);

  return (
    <Box
      sx={{
        display: isOpen ? "none" : "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        transition: "display 0.3s ease",
      }}
    >
      <List disablePadding>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton onClick={() => navigate("/")} sx={listItemStyles}>
            <ListItemIcon sx={listItemIconStyles}>
              <LogoIconBtn
                alt="Logo"
                src="/onlylogo.png"
                sx={{ ...AvatarSize }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <List disablePadding sx={isLogin ? { flexGrow: 1 } : { display: "none" }}>
        {isLogin &&
          Object.entries(menuData).map(([key, item]) => (
            <ListItem key={key} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.href)}
                sx={listItemStyles}
              >
                <ListItemIcon sx={listItemIconStyles}>
                  {<item.icon />}
                  {item.text}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Box sx={{ ...(isOpen && { display: "none" }) }}>
        <List disablePadding>
          <ListItem disablePadding sx={{ display: "block" }}>
            {isLogin ? (
              <BasicIconButton
                text="로그아웃"
                icon={<LogoutIcon />}
                onClick={() => handleLogOut(setIsLogin)}
              />
            ) : (
              <BasicIconButton
                text="로그인"
                icon={<PowerSettingsNewIcon />}
                onClick={() => navigate("/Login")}
              />
            )}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ClosedBar;
