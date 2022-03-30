import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="navigation navigation-component">
      <div className="logo-wrapper">
        <Logo className="Mindify-logo" />
        <h2>MindifyNotes</h2>
      </div>
      <div className="login-cart">
        <button className="button button-primary">LOGIN</button>
      </div>
    </header>
  );
};
