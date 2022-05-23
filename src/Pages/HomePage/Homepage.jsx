import "./Homepage.css";
import { useData } from "../../context/data";
import { Header, Input, Notes, Sidebar } from "../../components/index";
export const HomePage = () => {
  const { notes } = useData();
  return (
    <main className="display-grid">
      <Header />
      <Sidebar />
      <section className="section">
        <div>
          {" "}
          <Input prop={{ disabledPassed: false }} />
          <h2>NOTES</h2>
          <div className="notes-container">
            {notes.map((notesData) => {
              const { _id } = notesData;
              return <Notes prop={{ notesData }} key={_id} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
