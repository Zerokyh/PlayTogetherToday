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
import { menuItems } from "../../constants/MenuData";
import { geListItemStyles, getListItemIconStyles } from "../../utils/func";

const ClosedBar = () => {
  const navigate = useNavigate();
  const { isLogin, isOpen } = useThemeStore();
  const listItemStyles = geListItemStyles(isOpen);
  const listItemIconStyles = getListItemIconStyles(isOpen);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List sx={{ ...(isOpen && { display: "none" }), flexGrow: 1 }}>
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
        {isLogin &&
          menuItems.map((item) => (
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
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            {isLogin ? (
              <IconButton text="로그아웃" icon={<LogoutIcon />} />
            ) : (
              <IconButton text="로그인" icon={<PowerSettingsNewIcon />} />
            )}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ClosedBar;
