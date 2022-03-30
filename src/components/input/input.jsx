import { useState } from "react";
import { useData } from "../../context/data";
import "./input.css";
export const Input = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const { dispatch } = useData();
  return (
    <div className="CardDesign">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <hr />
      <textarea
        type="text"
        placeholder="notes..."
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />
      <hr />
      <h4 style={{ color: "red" }}> Add title or title used before</h4>
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
