import { useData } from "../../context/data";
import "./input.css";
import { IoColorPaletteOutline } from "react-icons/io5";
export const Input = () => {
  const { dispatch, state } = useData();
  const { title, notes, colors, tag } = state;
  return (
    <div className={`CardDesign ${colors}`}>
      <input
        type="text"
        placeholder="title"
        value={title}
        className={colors}
        onChange={(event) =>
          dispatch({ type: "TITLE_INPUT", payload: event.target.value })
        }
      />
      <hr />
      <textarea
        type="text"
        placeholder="notes..."
        value={notes}
        className={colors}
        onChange={(event) =>
          dispatch({ type: "TITLE_NOTES", payload: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="tags"
        className={`tag ${colors}`}
        value={tag}
        onChange={(event) =>
          dispatch({ type: "ADD_TAG", payload: event.target.value })
        }
      />
      <hr />
      <div className="button-container">
        <button
          className="button button-primary"
          disabled={title.length === 0 || notes.length === 0}
          onClick={() =>
            dispatch({
              type: "ADD_NOTES",
              payload: { title, notes, colors, tag },
            })
          }
        >
          Add Notes
        </button>
        <h1 className="color-pallete-button">
          <IoColorPaletteOutline />
          <div className="color-pallete">
            <div
              className="color-pallete-design color-one"
              onClick={() =>
                dispatch({
                  type: "ADD_COLOR",
                  payload: "color-one",
                })
              }
            ></div>
            <div
              className="color-pallete-design color-two"
              onClick={() =>
                dispatch({
                  type: "ADD_COLOR",
                  payload: "color-two",
                })
              }
            ></div>
            <div
              className="color-pallete-design color-three"
              onClick={() =>
                dispatch({
                  type: "ADD_COLOR",
                  payload: "color-three",
                })
              }
            ></div>
            <div
              className="color-pallete-design color-four"
              onClick={() =>
                dispatch({
                  type: "ADD_COLOR",
                  payload: "color-four",
                })
              }
            ></div>
            <div
              className="color-pallete-design color-five"
              onClick={() =>
                dispatch({
                  type: "ADD_COLOR",
                  payload: "color-five",
                })
              }
            ></div>
            <div
              className="color-pallete-design color-six"
              onClick={() =>
                dispatch({
                  type: "ADD_COLOR",
                  payload: "color-six",
                })
              }
            ></div>
          </div>
        </h1>
      </div>
    </div>
  );
};
