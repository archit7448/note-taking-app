import { useData } from "../../context/data";
import { Link } from "react-router-dom";
export const NOTES = () => {
  const { state, dispatch } = useData();
  const { data, archived } = state;
  return data.length > 0 ? (
    data.map((notesData) => {
      const { _id, title, notes, disabled } = notesData;
      return (
        <div className="CardDesign" key={_id}>
          <input
            type="text"
            placeholder="title"
            value={title}
            disabled={disabled}
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
            onChange={(event) =>
              dispatch({
                type: "EDIT_NOTES",
                payload: { title, notes: event.target.value, _id },
              })
            }
          />
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
                dispatch({ type: "REMOVE_NOTES", payload: { _id } })
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
