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
import { menuItems } from "../../constants/menuData";
import IconButton from "../../components/molecules/IconButton";

const ClosedBar = () => {
  const navigate = useNavigate();
  const { isLogin, isOpen } = useThemeStore();

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

      <Box sx={{ ...(isOpen && { display: "none" }), flexGrow: 1 }} />
      <List
        sx={{
          ...(isOpen && { display: "none" }),
          ...(isLogin && {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }),
        }}
      >
        <ListItem disablePadding sx={{ display: "block" }}>
          {isLogin ? (
            <IconButton text="로그아웃" icon={<LogoutIcon />} />
          ) : (
            <IconButton text="로그인" icon={<PowerSettingsNewIcon />} />
          )}
        </ListItem>
      </List>
    </List>
  );
};

export default ClosedBar;
