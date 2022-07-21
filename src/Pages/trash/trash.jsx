import { Sidebar, NotesArchive } from "../../components";
import { useData } from "../../context/data";
import { deleteNotes } from "../../reducer/notes";
import {
  notifyMessage,
  notifySuccess,
} from "../../utility/notification/notifcation";
import logo from "../../assets/logo.svg";
export const TrashPage = () => {
  const { deleteFilter, dispatch } = useData();
  const restoreHandler = (id) => {
    notifyMessage("NOTES RESTORED!");
    dispatch({ type: "RESTORE_NOTES", payload: id });
  };
  const removeHandler = (id) => {
    notifySuccess("NOTES DELETED!");
    deleteNotes(dispatch, id);
    dispatch({ type: "RESTORE_NOTES", payload: id });
  };
  return (
    <main className="display-flex">
      <Sidebar />
      <section className="section">
        <div className="logo-heading-icon flex-row ">
          MindifyNotes
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <h1 className="text-grey text-center">TRASH</h1>
        <div>
          {deleteFilter.map((notesData) => {
            const { _id } = notesData;
            return (
              <NotesArchive
                prop={{ notesData, restoreHandler, removeHandler }}
                key={_id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
