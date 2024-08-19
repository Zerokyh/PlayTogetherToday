import { BrowserRouter, Route, Routes } from "react-router-dom";
import PttLayout from "./PttLayout";
import Dashboard from "./Dashboard";
import Chat from "./Chat";

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
