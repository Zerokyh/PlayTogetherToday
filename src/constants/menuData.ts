import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";

export const menuData = {
  my: { text: "마이룸", icon: AccountCircleIcon, href: "/Myroom" },
  chat: { text: "채팅룸", icon: ChatIcon, href: "/Chat" },
  group: { text: "모임들", icon: GroupsIcon, href: "/GroupBoardList" },
  game: { text: "게임룸", icon: SportsEsportsIcon, href: "/Gameroom" },
  // home: { text: "홈으로", icon: HomeIcon, href: "/UtilTestPage" },
  home: { text: "홈으로", icon: HomeIcon, href: "/" },
};
