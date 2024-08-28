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
import LogoIconBtn from "../../components/molecules/LogoIconBtn";
import { AvatarSize } from "../../styles/mui";
import IconButton from "../../components/molecules/BasicIconButton";
import { geListItemStyles, getListItemIconStyles } from "../../utils/func";
import { menuData } from "../../constants/menuData";

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
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
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
              <IconButton
                text="로그아웃"
                icon={<LogoutIcon />}
                onClick={() => setIsLogin(false)}
              />
            ) : (
              <IconButton
                text="로그인"
                icon={<PowerSettingsNewIcon />}
                onClick={() => setIsLogin(true)}
              />
            )}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ClosedBar;
