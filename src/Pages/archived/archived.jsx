import { Sidebar, NotesArchive } from "../../components";
import { useData } from "../../context/data";
import { deleteArchive, restoreArchive } from "../../reducer/archived";
import logo from "../../assets/logo.svg";
export const ArchivedPage = () => {
  const { archived, dispatch } = useData();
  const removeHandler = (_id) => {
    deleteArchive(dispatch, _id);
  };
  const restoreHandler = (_id) => {
    restoreArchive(dispatch, _id);
  };
  return (
    <main className="display-flex">
      <Sidebar />
      <section className="section">
        <div className="logo-heading-icon flex-row ">
          MindifyNotes
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <h1 className="text-grey text-center">ARCHIVED</h1>
        <div>
          {archived.map((notesData) => {
            const { _id } = notesData;
            return (
              <NotesArchive
                prop={{ notesData, removeHandler, restoreHandler }}
                key={_id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
