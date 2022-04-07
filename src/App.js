import "./App.css";
import { HomePage } from "./Pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import { ARCHIVED } from "./Pages/archived/archived";
import { TrashPage } from "./Pages/Trash/TrashPage";
import { SignIn } from "./Pages/SignIn/signIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<ARCHIVED />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </div>
  );
}

export default App;
