import { Header, Sidebar, NotesArchive } from "../../components";
import { useData } from "../../context/data";
import { AddNotesToDataBase } from "../../reducer/notes";
import { RestoreNotes, RestoreTrash } from "../../reducer/trash";
// import { DeleteArchive, RestoreArchive } from "../../reducer/archived";
export const TrashPage = () => {
  const { trash, dispatch } = useData();
  const RemoveHandler = (_id) => {
    dispatch({ type: "REMOVE_TRASH", payload: { _id } });
  };
  const RestoreHandler = (notes) => {
    RestoreTrash(dispatch, notes);
  };
  return (
    <main className="display-grid">
      <Header />
      <Sidebar />
      <section className="section">
        <h1 className="text-grey text-center">ARCHIVED</h1>
        <div>
          {trash.map((notesData) => {
            const { _id } = notesData;
            return (
              <NotesArchive
                prop={{ notesData, RemoveHandler, RestoreHandler }}
                key={_id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
