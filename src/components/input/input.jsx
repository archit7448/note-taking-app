import { useState } from "react";
import { useData } from "../../context/data";
import "./input.css";
import { IoColorPaletteOutline } from "react-icons/io5";
import { Editor } from "../index";
import { AddNotesToDataBase, UpdateDataBase } from "../../reducer/notes";
import { useEffect } from "react";
export const Input = ({ prop }) => {
  const {
    disabledPassed,
    titlePassed,
    colorsPassed,
    contentPassed,
    notesPassed,
    tagPassed,
    priortyPassed,
    _id,
  } = prop;
  const { dispatch, colors, colorArray, quill } = useData();
  const [title, setTitle] = useState(disabledPassed ? titlePassed : "");
  const [tag, setTag] = useState(disabledPassed ? tagPassed : "code");
  const [priorty, setPriorty] = useState(
    disabledPassed ? priortyPassed : "high"
  );

  useEffect(() => {
    if (disabledPassed) {
      dispatch({ type: "ADD_COLOR", payload: colorsPassed });
    }
  }, []);
  // Notes Handler

  const NotesHandler = () => {
    setTitle("");
    setTag("code");
    setPriorty("high");
    dispatch({ type: "ADD_COLOR", payload: "" });
    AddNotesToDataBase(
      {
        title,
        notes: quill?.root?.innerHTML,
        content: quill?.getContents(),
        tag,
        priorty,
        colors,
        disabled: true,
      },
      dispatch
    );
    quill.deleteText(0, quill.getLength());
  };

  // Update Handler

  const UpdateHandler = () => {
    UpdateDataBase(
      {
        title,
        notes: quill.root.innerHTML,
        content: quill.getContents(),
        tag,
        priorty,
        colors,
        disabled: true,
      },
      dispatch,
      _id
    );
    dispatch({ type: "ADD_COLOR", payload: "" });
  };

  return (
    <div className="flex-center text-modal">
      <div className={`CardDesign ${colors}`}>
        <input
          type="text"
          placeholder="title"
          value={title}
          className={colors}
          onChange={(event) => setTitle(event.target.value)}
        />
        <hr />
        <Editor prop={{ contentPassed, disabledPassed, notesPassed }} />
        <div className="flex-row flex-center justify-content">
          <div className="flex-center margin-2rem">
            <h3>Tags</h3>
            <select
              className="select-tags"
              onClick={(event) => setTag(event.target.value)}
            >
              <option value="code">Code</option>
              <option value="health">Health</option>
              <option value="exericse">Exercise</option>
              <option value="fun">fun</option>
            </select>
          </div>
          <div className="flex-center">
            <h3>Priorty</h3>
            <select
              className="select-tags"
              onClick={(event) => setPriorty(event.target.value)}
            >
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="button-container">
          <button
            className="button button-primary"
            onClick={() => (!disabledPassed ? NotesHandler() : UpdateHandler())}
          >
            {!disabledPassed ? "Add Notes" : "Save Notes"}
          </button>
          <h1 className="color-pallete-button">
            <IoColorPaletteOutline />
            <div className="color-pallete">
              {colorArray.map((colorNumber) => {
                return (
                  <div
                    className={`color-pallete-design ${colorNumber}`}
                    onClick={() =>
                      dispatch({ type: "ADD_COLOR", payload: colorNumber })
                    }
                    key={colorNumber}
                  ></div>
                );
              })}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};
