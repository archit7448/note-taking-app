import { useData } from "../../context/data";

export const NOTES = () => {
  const { state, dispatch } = useData();
  const { data } = state;
  return data.length > 0 ? (
    data.map(({ _id, title, notes, disabled }) => {
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
            onClick={() => dispatch({ type: "REMOVE_NOTES", payload: { _id } })}
          >
            REMOVE
          </button>
        </div>
      );
    })
  ) : (
    <div></div>
  );
};
