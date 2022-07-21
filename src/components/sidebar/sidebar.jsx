import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdLogout, MdOutlineArchive, MdArchive } from "react-icons/md";
import { BsTrash, BsFillTrashFill } from "react-icons/bs";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./sidebar.css";
export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/signIn");
  };
  return (
    <div className="sidebar">
      <div className="logo-app flex-row">
        MindifyNotes
        <img src={logo} alt="logo" className="logo-size"></img>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
      >
        {location.pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
        <div className="icon-name">HOME</div>
      </NavLink>
      <NavLink
        to="/archived"
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
      >
        {location.pathname === "/archived" ? (
          <MdArchive />
        ) : (
          <MdOutlineArchive />
        )}
        <div className="icon-name">ARHCIVE</div>
      </NavLink>
      <NavLink
        to="/trash"
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
      >
        {location.pathname === "/trash" ? <BsFillTrashFill /> : <BsTrash />}
        <div className="icon-name">TRASH</div>
      </NavLink>
      <div className="icon-wrapper flex-row" onClick={() => logoutHandler()}>
        <MdLogout />
        <div className="icon-name">LOGOUT</div>
      </div>
    </div>
  );
};
