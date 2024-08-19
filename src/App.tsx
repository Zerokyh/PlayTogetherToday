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
            <Route path="/" Component={Dashboard} />
            <Route path="/Chat" Component={Chat} />
            {/* <Route path="/UserRegister" Component={UserRegister} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
