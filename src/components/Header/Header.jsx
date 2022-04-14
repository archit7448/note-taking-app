import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.css";
export const Header = () => {
  return (
    <header className="navigation ">
      <div className="logo-wrapper">
        <Logo className="Mindify-logo" />
        <h3 className="header-logo">MindifyNotes</h3>
      </div>
    </header>
  );
};
