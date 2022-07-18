import { Header, Sidebar, NotesArchive } from "../../components";
import { useData } from "../../context/data";
import { DeleteArchive, RestoreArchive } from "../../reducer/archived";
export const ARCHIVED = () => {
  const { archived, dispatch } = useData();
  const RemoveHandler = (_id) => {
    DeleteArchive(dispatch, _id);
  };
  const RestoreHandler = (_id) => {
    RestoreArchive(dispatch, _id);
  };
  return (
    <main className="display-grid">
      <Header />
      <Sidebar />
      <section className="section">
        <h1 className="text-grey text-center">ARCHIVED</h1>
        <div>
          {archived.map((notesData) => {
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
