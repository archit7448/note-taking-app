import { useData } from "../../context/data";

export const InputArchived = () => {
  const { state, dispatch } = useData();
  const { archived } = state;
  return archived.length > 0 ? (
    archived.map((notesData) => {
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
                type: "EDIT_ARCHIVED",
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
                type: "EDIT_ARCHIVED",
                payload: { notes: event.target.value, _id, title },
              })
            }
          />
          <hr />
          <div className="button-container">
            {disabled ? (
              <button
                className="button button-primary"
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_DISABLED_ARCHIVED",
                    payload: { _id },
                  })
                }
              >
                EDIT
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={() =>
                  dispatch({ type: "SAVE_ARCHIVED_TOGGLE", payload: { _id } })
                }
              >
                SAVE
              </button>
            )}
            <button
              className="button button-secondary"
              onClick={() =>
                dispatch({ type: "REMOVE_ARCHIVED", payload: { _id } })
              }
            >
              REMOVE
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <div>
      <h1 className="text-xl">NO ARCHIVED NOTES</h1>
    </div>
  );
};
