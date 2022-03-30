import { useState } from "react";
import { Header } from "../../components/Header/Header";
import "./signIn.css";
import axios from "axios";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (loginDetails) => {
    try {
      const response = await axios.post("/api/auth/login", loginDetails);
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Header />
      <section className="form-wrapper validation">
        <form className="form">
          <label className="form-label">
            {" "}
            E-mail
            <input
              type="text"
              name="email-id"
              placeholder="e-mail"
              value={email}
              className="form-input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="form-label">
            {" "}
            Password
            <input
              type="text"
              name="password"
              placeholder="password"
              className="form-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {/* {error && <h1>something went wrong</h1>} */}
          <button
            className="button button-secondary button-form"
            onClick={(event) => {
              event.preventDefault();
              loginHandler({
                email: "adarshbalika@gmail.com",
                password: "adarshBalika123",
              });
            }}
          >
            Guest Login
          </button>
        </form>
      </section>
    </main>
  );
};
