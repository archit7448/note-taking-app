import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { BsArchive, BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "notes-header-heading-active" : "notes-header-heading"
        }
      >
        <AiOutlineHome />
        HOME
      </NavLink>
      <NavLink
        to="/label"
        className={({ isActive }) =>
          isActive ? "notes-header-heading-active" : "notes-header-heading"
        }
      >
        <MdLabelOutline />
        LABEL
      </NavLink>
      <NavLink
        to="/archived"
        className={({ isActive }) =>
          isActive ? "notes-header-heading-active" : "notes-header-heading"
        }
      >
        <BsArchive />
        ARCHIVE
      </NavLink>
      <NavLink
        to="/trash"
        className={({ isActive }) =>
          isActive ? "notes-header-heading-active" : "notes-header-heading"
        }
      >
        <BsTrash />
        TRASH
      </NavLink>
    </div>
  );
};
