import "./App.css";
import { HomePage } from "./Pages/HomePage/Homepage";
import { SignIn } from "./Pages/SignIn/signIn";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./reducer/auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
