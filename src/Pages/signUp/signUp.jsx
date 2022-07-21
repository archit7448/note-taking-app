import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.svg";
import {
  notifyError,
  notifySuccess,
} from "../../utility/notification/notifcation";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const SignUpHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/signup", params);
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      notifySuccess("SignUp success");
    } catch (error) {
      notifyError("Name already taken");
    }
  };
  const verifyHandler = () => {
    if (password.length < 8) {
      notifyError("Password length should be 8");
    } else if (firstName.length < 1) {
      notifyError("Name is short ");
    } else if (lastName.length < 1) {
      notifyError("Name is short");
    } else {
      SignUpHandler({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
      });
    }
  };

  return (
    <main className="flex-center">
      <div className="login-container">
        <div className="logo-login">
          SignUp MindifyNotes
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <h3 className="login-small-heading">Name Details</h3>
        <div className="name-details-container">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <h3 className="login-small-heading">Username</h3>
        <input
          type="text"
          value={email}
          placeholder="Enter Username"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h3 className="login-small-heading">Password</h3>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="button button-primary button-login"
          onClick={() => verifyHandler()}
        >
          SignUp
        </button>
        <button
          className="button button-secondary button-login"
          onClick={() => navigate("/")}
        >
          Already User?login
        </button>
      </div>
    </main>
  );
};
