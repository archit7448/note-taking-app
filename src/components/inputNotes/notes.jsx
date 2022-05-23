import { useData } from "../../context/data";
import parse from "html-react-parser";
import { Input } from "..";
import { DeleteNotes } from "../../reducer/notes";
export const Notes = ({ prop }) => {
  const { dispatch } = useData();
  const { notesData } = prop;
  const { _id, title, notes, disabled, colors, tag, content, priorty } =
    notesData;
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
      <hr />
      <div>{parse(notes)}</div>
      {tag.length > 0 && <h3 className="tag-container">{tag}</h3>}
      <hr />
      <h1>{disabled}</h1>
      <div className="button-container">
        <button
          className="button button-primary"
          onClick={() =>
            dispatch({ type: "TOGGLE_DISABLED", payload: { _id } })
          }
        >
          EDIT
        </button>
        <button
          className="button button-secondary"
          onClick={() => DeleteNotes(dispatch, _id)}
        >
          REMOVE
        </button>
        <button
          className="button button-secondary"
          onClick={() =>
            dispatch({ type: "ADD_TO_ARCHIVED", payload: notesData })
          }
        >
          Archived
        </button>
      </div>
    </div>
  );
};
