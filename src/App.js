import "./App.css";
import { HomePage } from "./Pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import { ARCHIVED } from "./Pages/archived/archived";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<ARCHIVED />} />
      </Routes>
    </div>
  );
}

export default App;
