import parse from "html-react-parser";
import { FaTrashRestore, FaTrash } from "react-icons/fa";

export const NotesArchive = ({ prop }) => {
  const { notesData, removeHandler, restoreHandler } = prop;
  const { _id, title, notes, disabled, colors, priorty, tag } = notesData;

  return (
    <div className={`CardDesign ${colors}`} key={_id}>
      <input
        type="text"
        placeholder="title"
        value={title}
        disabled={disabled}
        className={colors}
      />
      <div>{parse(notes)}</div>
      <div className="tag-parent">
        {tag.length > 0 && <h3 className="tag-container">{tag}</h3>}
        {priorty.length > 0 && <h3 className="tag-container">{priorty}</h3>}
      </div>
      <h1>{disabled}</h1>
      <div className="button-container">
        <button
          className={`button button-secondary border-0px ${colors}`}
          onClick={() => restoreHandler(_id)}
        >
          <FaTrashRestore />
        </button>
        <button
          className={`button button-secondary border-0px ${colors}`}
          onClick={() => removeHandler(_id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
