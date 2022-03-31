import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.css";
export const Header = () => {
  return (
    <header className="navigation navigation-component">
      <div className="logo-wrapper">
        <Logo className="Mindify-logo" />
        <h2 className="header-logo">MindifyNotes</h2>
      </div>
    </header>
  );
};
