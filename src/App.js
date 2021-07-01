import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Widgets from "./Components/Widgets/Widgets";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Main />

        {/* Widgets */}
        <Widgets />
      </Router>
    </div>
  );
}

export default App;
