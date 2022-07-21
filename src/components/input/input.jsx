import { useState } from "react";
import { useData } from "../../context/data";
import "./input.css";
import { IoColorPaletteOutline } from "react-icons/io5";
import { Editor } from "../index";
import { addNotesToDatabase, updateDatabase } from "../../reducer/notes";
import { useEffect } from "react";
import {
  notifyInfo,
  notifyMessage,
} from "../../utility/notification/notifcation";
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
    if (title.length > 0) {
      setTitle("");
      setTag("code");
      setPriorty("high");
      dispatch({ type: "ADD_COLOR", payload: "color-two" });
      addNotesToDatabase(
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
    } else {
      notifyInfo("PLEASE ADD TITLE");
    }
  };

  // Update Handler

  const UpdateHandler = () => {
    if (title.length > 0) {
      updateDatabase(
        {
          title,
          notes:
            quill.root.className === "ql-editor ql-blank"
              ? notesPassed
              : quill.root.innerHTML,
          content:
            quill.root.className === "ql-editor ql-blank"
              ? contentPassed
              : quill.getContents(),
          tag,
          priorty,
          colors,
          disabled: true,
        },
        dispatch,
        _id
      );
      dispatch({ type: "ADD_COLOR", payload: "color-two" });
    } else {
      notifyMessage("PLEASE ADD TITLE");
    }
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
              <option value="code">code</option>
              <option value="health">health</option>
              <option value="exercise">exercise</option>
              <option value="fun">fun</option>
            </select>
          </div>
          <div className="flex-center">
            <h3>Priorty</h3>
            <select
              className="select-tags"
              onClick={(event) => setPriorty(event.target.value)}
            >
              <option value="high">high</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
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
