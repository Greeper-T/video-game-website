import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBarMenu from "./components/SideBarMenu";
import GameDetails from "./components/GameDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBarMenu/>} />
        <Route path="/game/:id" element={<GameDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
