import { BrowserRouter, Route, Routes } from "react-router-dom";
import PttLayout from "./ui/PttLayout";
import Dashboard from "./ui/Dashboard";
import Chat from "./ui/Chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PttLayout />}>
            {/* 레이아웃 등록 */}
            <Route path="/" Component={Dashboard} /> {/* 루트페이지 등록 */}
            <Route path="/Chat" Component={Chat} /> {/* 채팅페이지 등록 */}
            {/* 밑에 추가 페이지 등록 */}
            {/* <Route path="/UserRegister" Component={UserRegister} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
