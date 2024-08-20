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
import { menuItems } from "../../constants/MenuData";

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
              onClick={() => navigate(item.link)}
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
          <ListItemButton sx={listItemStyles}>
            <ListItemIcon sx={listItemIconStyles}>
              {isLogin ? (
                <>
                  {" "}
                  <LogoutIcon />
                  로그아웃{" "}
                </>
              ) : (
                <>
                  {" "}
                  <PowerSettingsNewIcon />
                  로그인{" "}
                </>
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </List>
  );
};

export default ClosedBar;
