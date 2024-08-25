import { BrowserRouter, Route, Routes } from "react-router-dom";
import PttLayout from "./ui/PttLayout";
import Dashboard from "./ui/Dashboard";
import Chat from "./kyh/Chat";
import Login from "./ui/Login";
import MySetting from "./kyh/MySetting";
import MyInfoModify from "./kyh/MyInfoModify";

function App() {
  return (
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
          {/* 밑에 추가 페이지 등록 */}
          {/* <Route path="/UserRegister" Component={UserRegister} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
