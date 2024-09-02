import { BrowserRouter, Route, Routes } from "react-router-dom";
import PttLayout from "./ui/PttLayout";
import Dashboard from "./ui/Dashboard";
import Chat from "./kyh/Chat";
import MySetting from "./kyh/MySetting";
import MyInfoModify from "./kyh/MyInfoModify";
import UtilTestPage from "./ui/UtilTestPage";
import Myroom from "./jwj/Myroom/Myroom";
import GroupMake from "./jwj/GroupMake/GroupMake";
import GroupEnter from "./jwj/GroupEnter/GroupEnter";
import Gameroom from "./jwj/Gameroom/Gameroom";
import Myroom_authority from "./jwj/Myroom_authority/Myroom_authority";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import Border from "./hsw/Border";
import BorderDetail from "./hsw/BorderDetail";
import Login from "./ksy/LogInPage/LogIn";
import SignUp from "./ksy/SignUpPage/SignUp";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<PttLayout />}>
            {/* 레이아웃 등록 */}
            <Route path="/" Component={Dashboard} />
            {/* 루트페이지 등록 */}
            <Route path="/Chat" Component={Chat} />
            {/* 채팅페이지 등록 */}
            <Route path="/MySetting" Component={MySetting} />
            {/* 내 설정 페이지 등록 */}
            <Route path="/MyInfoModify" Component={MyInfoModify} />
            {/* 개인정보 편집 페이지 등록 */}
            <Route path="/Login" Component={Login} />
            {/* 로그인 페이지 등록 */}
            <Route path="/SignUp" Component={SignUp} />
            {/* 회원가입 페이지 등록 */}
            <Route path="/Myroom" Component={Myroom} />
            {/* 마이룸 페이지 등록 */}
            <Route path="/MyroomAuthority" Component={Myroom_authority} />
            {/* 마이룸 권한 설정 페이지 등록 */}
            <Route path="/GroupMake" Component={GroupMake} />
            {/* 그룹 만들기 페이지 등록 */}
            <Route path="/GroupEnter" Component={GroupEnter} />
            {/* 그룹 가입 페이지 등록 */}
            <Route path="/Gameroom" Component={Gameroom} />
            {/* 게임룸 페이지 등록 */}
            <Route path="/GroupBoardList" Component={Border} />
            {/* 모임들 페이지 등록 */}
            <Route path="/BorderDetail" Component={BorderDetail} />
            {/* 모임 상세 페이지 등록 */}
            <Route path="/UtilTestPage" Component={UtilTestPage} />
            {/* 임시 테스트 페이지 등록 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
