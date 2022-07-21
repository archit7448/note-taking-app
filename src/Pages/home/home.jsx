import "./home.css";
import { useData } from "../../context/data";
import { Filter, Input, Notes, Sidebar } from "../../components/index";
import {
  colorFilterFunc,
  filterDeletedData,
  priortyFilterFunc,
  tagFilterFunc,
} from "../../reducer/filter";
import logo from "../../assets/logo.svg";
export const HomePage = () => {
  const { notes, tagFilter, colorFilter, priortyFilter, deleteFilter } =
    useData();
  const colorFilterData = colorFilterFunc(
    filterDeletedData(notes, deleteFilter),
    colorFilter
  );
  const tagFilterData = tagFilterFunc(colorFilterData, tagFilter);
  const priortyFilterData = priortyFilterFunc(tagFilterData, priortyFilter);
  return (
    <main className="display-flex">
      <Sidebar />
      <section className="section">
        <div className="logo-heading-icon flex-row ">
          MindifyNotes
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <Filter />
        <Input prop={{ disabledPassed: false }} />
        <h2>NOTES</h2>
        <div className="notes-container">
          {priortyFilterData.map((notesData) => {
            const { _id } = notesData;
            return <Notes prop={{ notesData }} key={_id} />;
          })}
        </div>
      </section>
    </main>
  );
};
