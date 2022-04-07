import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header className="navigation ">
      <div className="logo-wrapper">
        <Logo className="Mindify-logo" />
        <h3 className="header-logo">MindifyNotes</h3>
      </div>
      <div className="notes-heading-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "notes-header-heading-active" : "notes-header-heading"
          }
        >
          NOTES
        </NavLink>
        <NavLink
          to="/archived"
          className={({ isActive }) =>
            isActive ? "notes-header-heading-active" : "notes-header-heading"
          }
        >
          ARCHIVED
        </NavLink>
        <NavLink
          to="/trash"
          className={({ isActive }) =>
            isActive ? "notes-header-heading-active" : "notes-header-heading"
          }
        >
          TRASH
        </NavLink>
      </div>
    </header>
  );
};
