import parse from "html-react-parser";

export const NotesArchive = ({ prop }) => {
  const { notesData, RemoveHandler, RestoreHandler, Restore } = prop;
  const { _id, title, notes, disabled, colors, tag, content, priorty } =
    notesData;

  return (
    <div className={`CardDesign ${colors}`} key={_id}>
      <input
        type="text"
        placeholder="title"
        value={title}
        disabled={disabled}
        className={colors}
      />
      <hr />
      <div>{parse(notes)}</div>
      <div className="button-container">
        {tag.length > 0 && <h3 className="tag-container">{tag}</h3>}
        {priorty.length > 0 && <h3 className="tag-container">{priorty}</h3>}
      </div>
      <hr />
      <h1>{disabled}</h1>
      <div className="button-container">
        <button
          className="button button-primary"
          onClick={() => RestoreHandler(_id)}
        >
          RESTORE
        </button>
        <button
          className="button button-secondary"
          onClick={() => RemoveHandler(_id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};
