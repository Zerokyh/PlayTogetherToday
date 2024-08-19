import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Calendar from "../components/atom/Calendar";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../components/atom/LogoIcon";
import LogoBtn from "../components/atom/LogoIconBtn";
import useThemeStore from "../store/store";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isLogin, setIsLogin, isOpen, setIsOpen } = useThemeStore();
  const [game, setGame] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mx: "auto", ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={handleDrawerClose}
          sx={{ ...(isOpen == false && { display: "none" }) }}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List sx={{ ...(isOpen && { display: "none" }) }}>
        <LogoBtn />
        {["마이룸", "채팅룸", "모임룸", "게임룸", "홈으로"].map(
          (text, index) => {
            const link = index === 1 ? "/Chat" : index === 4 ? "/" : "#";
            return (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => {
                    navigate(link);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: isOpen ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      height: "50px",
                      minWidth: 0,
                      mr: isOpen ? 3 : "auto",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {index % 5 === 0 ? (
                      <AccountCircleIcon />
                    ) : index % 5 === 1 ? (
                      <ChatIcon />
                    ) : index % 5 === 2 ? (
                      <GroupsIcon />
                    ) : index % 5 === 3 ? (
                      <SportsEsportsIcon />
                    ) : (
                      <HomeIcon />
                    )}
                    {text}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            );
          }
        )}
      </List>
      <Box sx={{ ...(isOpen && { display: "none" }), flexGrow: 1 }} />
      <List sx={{ ...(isOpen && { display: "none" }) }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                height: "50px",
                minWidth: 0,
                mr: isOpen ? 3 : "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <LogoutIcon />
              로그아웃
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ ...(isOpen == false && { display: "none" }) }}>
        <ListItemButton
          sx={{
            width: "90px",
            minHeight: 48,
            justifyContent: "center",
            px: 2.5,
            position: "absolute",
            top: -54,
            fontSize: "12px",
          }}
        >
          로그아웃
        </ListItemButton>
        <Divider
          variant="middle"
          component="li"
          sx={{ position: "relative", top: -7 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box>
            <LogoIcon />
          </Box>
          <Box>
            <ListItemText
              primary={`[]회원님`}
              primaryTypographyProps={{ fontSize: 14 }}
            />
            <ListItemText
              primary={`그룹 []의 호스트입니다.`}
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          <FormControl sx={{ my: 1, width: 114 }} size="small">
            <InputLabel
              id="group-select-label"
              size="small"
              sx={{ fontSize: 10 }}
            >
              Select Group
            </InputLabel>
            <Select
              labelId="group-select-label"
              id="group-select"
              value={game}
              label="Select Group"
              onChange={handleChange}
            >
              <MenuItem value={10}>🎳볼링</MenuItem>
              <MenuItem value={20}>🎲보드게임</MenuItem>
              <MenuItem value={30}>⚽축구</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{
              width: 100,
              height: 40,
              color: "black",
              fontWeight: 600,
              border: "1px solid #C0C0C0",
              fontSize: 12,
            }}
          >
            새로운 모임
          </Button>
        </Box>
        <Skeleton
          variant="rounded"
          width={224}
          height={200}
          sx={{ mx: "auto" }}
        />
        <Box sx={{ height: 130, display: "flex", alignItems: "center" }}>
          <Grid container spacing={0} sx={{ gap: 2, justifyContent: "center" }}>
            <Grid item xs={5} md={5}>
              <Button
                sx={{
                  width: 100,
                  height: 40,
                  color: "black",
                  fontWeight: 600,
                  border: "1px solid #C0C0C0",
                  fontSize: 12,
                }}
              >
                마이룸
              </Button>
            </Grid>
            <Grid item xs={5} md={5}>
              <Button
                sx={{
                  width: 100,
                  height: 40,
                  color: "black",
                  fontWeight: 600,
                  border: "1px solid #C0C0C0",
                  fontSize: 12,
                }}
                onClick={() => {
                  navigate("/Chat");
                }}
              >
                채팅룸
              </Button>
            </Grid>
            <Grid item xs={5} md={5}>
              <Button
                sx={{
                  width: 100,
                  height: 40,
                  color: "black",
                  fontWeight: 600,
                  border: "1px solid #C0C0C0",
                  fontSize: 12,
                }}
              >
                모임룸
              </Button>
            </Grid>
            <Grid item xs={5} md={5}>
              <Button
                sx={{
                  width: 100,
                  height: 40,
                  color: "black",
                  fontWeight: 600,
                  border: "1px solid #C0C0C0",
                  fontSize: 12,
                }}
              >
                게임룸
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Calendar />
        </Box>
        <Skeleton
          variant="rounded"
          width={224}
          height={140}
          sx={{ mx: "auto" }}
        />
      </List>
    </Drawer>
  );
};

export default SideBar;
