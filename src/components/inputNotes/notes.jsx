import { useData } from "../../context/data";
import parse from "html-react-parser";
import { Input } from "..";
import { addNotesToArchived } from "../../reducer/archived";
import { FaTrash } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { notifyMessage } from "../../utility/notification/notifcation";
export const Notes = ({ prop }) => {
  const { dispatch } = useData();
  const { notesData } = prop;
  const { _id, title, notes, disabled, colors, tag, content, priorty } =
    notesData;

  const archivedHandler = () => {
    addNotesToArchived(notesData, dispatch, _id);
  };
  const deleteHandler = () => {
    notifyMessage("NOTES TRASHED!");
    dispatch({
      type: "DELETE_NOTES",
      payload: notesData,
    });
  };
  return !disabled ? (
    <Input
      prop={{
        _id,
        titlePassed: title,
        notesPassed: notes,
        colorPassed: colors,
        tagPassed: tag,
        contentPassed: content,
        disabledPassed: !disabled,
        priortyPassed: priorty,
      }}
    />
  ) : (
    <div className={`CardDesign ${colors}`} key={_id}>
      <input
        type="text"
        placeholder="title"
        value={title}
        disabled={disabled}
        className={colors}
        onChange={(event) =>
          dispatch({
            type: "EDIT_NOTES",
            payload: { title: event.target.value, _id, notes },
          })
        }
      />
      <div>{parse(notes)}</div>
      <div className="tag-parent">
        {tag.length > 0 && <h3 className="tag-container">{tag}</h3>}
        {priorty.length > 0 && <h3 className="tag-container">{priorty}</h3>}
      </div>
      <h1>{disabled}</h1>
      <div className="button-container">
        <button
          className={`button button-secondary ${colors} border-0px`}
          onClick={() =>
            dispatch({ type: "TOGGLE_DISABLED", payload: { _id } })
          }
        >
          <MdModeEditOutline />
        </button>
        <button
          className={`button button-secondary ${colors} border-0px`}
          onClick={() => deleteHandler()}
        >
          <FaTrash />
        </button>
        <button
          className={`button button-secondary ${colors} border-0px`}
          onClick={() => archivedHandler()}
        >
          <IoMdArchive />
        </button>
      </div>
    </div>
  );
};
