import "./App.css";
import "quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  ArchivedPage,
  HomePage,
  SignIn,
  SignUp,
  TrashPage,
  PrivateRoute,
  RestrictedRoute,
} from "./Pages/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="/trash" element={<TrashPage />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
