import { useData } from "../../context/data";

export const InputTrash = () => {
  const { state, dispatch } = useData();
  const { trash } = state;
  return trash.length > 0 ? (
    trash.map((notesData) => {
      const { _id, title, notes, disabled, colors } = notesData;
      return (
        <div className={`CardDesign ${colors}`} key={_id}>
          <input
            className={colors}
            type="text"
            placeholder="title"
            value={title}
            disabled={disabled}
          />
          <hr />
          <textarea
            className={colors}
            type="text"
            placeholder="notes..."
            value={notes}
            disabled={disabled}
          />
          <hr />
          <div className="button-container">
            <button
              className="button button-primary"
              onClick={() =>
                dispatch({
                  type: "TRASH_RESTORE",
                  payload: notesData,
                })
              }
            >
              RESTORE
            </button>
            <button
              className="button button-secondary"
              onClick={() => dispatch({ type: "DELETE_TRASH", payload: _id })}
            >
              DELETE
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <div>
      <h1 className="text-xl">TRASH EMPTY</h1>
    </div>
  );
};
