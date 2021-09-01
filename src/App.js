import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Content from "./components/template/Content";
import SideBar from "./components/template/SideBar";
import Message from "./components/msg/Menssages";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Content />
      </Router>
    </div>
  );
}

export default App;
