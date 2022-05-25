import { useQuill } from "react-quilljs";
import { useEffect } from "react";
import "./editor.css";
import { useData } from "../../context/data";
const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "heading"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ],
};

export const formats = [
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "header",
  "list",
  "indent",
];

export const Editor = ({ prop }) => {
  const { quill, quillRef } = useQuill({ modules, formats });
  const { dispatch } = useData();
  const { contentPassed, disabledPassed} = prop;
  useEffect(() => {
    if (quill && disabledPassed) {
      quill.setContents(contentPassed);
    }
  }, [quill]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        dispatch({
          type: "ADD_NOTES_DATA",
          payload: quill,
        });
      });
    }
  }, [quill]);
  return (
    <div className="text-editor-wrapper">
      <div ref={quillRef} className="text-editor" />
    </div>
  );
};
