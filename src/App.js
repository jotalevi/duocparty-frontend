import "./App.css";
import { Route, Routes } from "react-router-dom";

import EnterPage from "./pages/enter";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import CreatePage from "./pages/create";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/upcomming" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
