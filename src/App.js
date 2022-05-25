import "./App.css";
import { HomePage } from "./Pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import "quill/dist/quill.snow.css";
import { ARCHIVED } from "./Pages/archived/archived";
import { TrashPage } from "./Pages/Trash/TrashPage";
import { SignIn } from "./Pages/SignIn/signIn";
import { LabelPage } from "./Pages/labelPage/labelPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/archived" element={<ARCHIVED />} /> */}
        {/* <Route path="/trash" element={<TrashPage />} /> */}
        {/* <Route path="/label" element={<LabelPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
