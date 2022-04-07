import { useData } from "../../context/data";
import { FilterTag } from "../../reducer/filter";
export const NOTES = () => {
  const { state, dispatch } = useData();
  const { data, tagFilter } = state;
  const filtredData = FilterTag(data, tagFilter);
  return data.length > 0 ? (
    filtredData.map((notesData) => {
      const { _id, title, notes, disabled, colors, tag } = notesData;
      return (
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
          <textarea
            type="text"
            placeholder="notes..."
            value={notes}
            disabled={disabled}
            className={colors}
            onChange={(event) =>
              dispatch({
                type: "EDIT_NOTES",
                payload: { title, notes: event.target.value, _id },
              })
            }
          />
          {tag.length > 0 && <h3 className="tag-container">{tag}</h3>}
          <hr />
          <h1>{disabled}</h1>
          <div className="button-container">
            {disabled ? (
              <button
                className="button button-primary"
                onClick={() =>
                  dispatch({ type: "TOGGLE_DISABLED", payload: { _id } })
                }
              >
                EDIT
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={() =>
                  dispatch({ type: "SAVE_TOGGLE_DISABLED", payload: { _id } })
                }
              >
                SAVE
              </button>
            )}
            <button
              className="button button-secondary"
              onClick={() =>
                dispatch({ type: "REMOVE_NOTES", payload: notesData })
              }
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
    })
  ) : (
    <div></div>
  );
};
