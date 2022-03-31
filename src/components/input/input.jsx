import { useState } from "react";
import { useData } from "../../context/data";
import "./input.css";
export const Input = () => {
  const { dispatch, state } = useData();
  const { title, notes } = state;
  return (
    <div className="CardDesign">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) =>
          dispatch({ type: "TITLE_INPUT", payload: event.target.value })
        }
      />
      <hr />
      <textarea
        type="text"
        placeholder="notes..."
        value={notes}
        onChange={(event) =>
          dispatch({ type: "TITLE_NOTES", payload: event.target.value })
        }
      />
      <hr />
      <button
        className="button button-primary"
        onClick={() =>
          dispatch({ type: "ADD_NOTES", payload: { title, notes } })
        }
      >
        Add Notes
      </button>
    </div>
  );
};
