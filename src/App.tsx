import { BrowserRouter, Route, Routes } from "react-router-dom";
import PttLayout from "./ui/PttLayout";
import Dashboard from "./ui/Dashboard";
import Chat from "./kyh/Chat";
import Login from "./ui/Login";
import MySetting from "./kyh/MySetting";
import MyInfoModify from "./kyh/MyInfoModify";
import UtilTestPage from "./ui/UtilTestPage";
import Myroom from "./jwj/Myroom/Myroom";
import GroupMake from "./jwj/GroupMake/GroupMake";
import GroupEnter from "./jwj/GroupEnter/GroupEnter";
import Gameroom from "./jwj/Gameroom/Gameroom";
import Myroom_authority from "./jwj/Myroom_authority/Myroom_authority";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/fonts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<PttLayout />}>
            {/* 레이아웃 등록 */}
            <Route path="/" Component={Dashboard} /> {/* 루트페이지 등록 */}
            <Route path="/Chat" Component={Chat} /> {/* 채팅페이지 등록 */}
            <Route path="/MySetting" Component={MySetting} />
            {/* 내 설정 페이지 등록 */}
            <Route path="/MyInfoModify" Component={MyInfoModify} />
            {/* 개인정보 편집 페이지 등록 */}
            <Route path="/Login" Component={Login} />
            {/* 임시 로그인 페이지 등록 */}
            <Route path="/UtilTestPage" Component={UtilTestPage} />
            {/* 임시 테스트 페이지 등록 */}
            {/* 밑에 추가 페이지 등록 */}
            {/* <Route path="/UserRegister" Component={UserRegister} /> */}
            <Route path="/Myroom" Component={Myroom} />
            <Route path="/MyroomAuthority" Component={Myroom_authority} />
            <Route path="/GroupMake" Component={GroupMake} />
            <Route path="/GroupEnter" Component={GroupEnter} />
            <Route path="/Gameroom" Component={Gameroom} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
