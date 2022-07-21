import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signIn.css";
import axios from "axios";
import logo from "../../assets/logo.svg";
import {
  notifyError,
  notifySuccess,
} from "../../utility/notification/notifcation";
export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorHandler = () => {
    notifyError("ERROR");
    setEmail("");
    setPassword("");
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      navigate("/");
      notifySuccess("Login success");
    } catch (error) {
      console.log(error);
      errorHandler();
    }
  };

  const setGuestCredentials = () => {
    setEmail("architsingh@gmail.com");
    setPassword("architsingh123");
  };

  return (
    <main className="flex-center">
      <div className="login-container">
        <div className="logo-login">
          LogIn MindifyNotes{" "}
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <h3 className="login-small-heading">Username</h3>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h3 className="login-small-heading">Password</h3>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <h3 className="guest-heading" onClick={() => setGuestCredentials()}>
          login with guest credentials?
        </h3>
        <button
          className="button button-primary button-login"
          onClick={() => LoginHandler({ email: email, password: password })}
        >
          Login
        </button>
        <button
          className="button button-secondary button-login"
          onClick={() => navigate("/signUp")}
        >
          New User? SignUp
        </button>
      </div>
    </main>
  );
};
