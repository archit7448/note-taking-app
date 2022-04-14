import "./Homepage.css";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/input/input";
import { NOTES } from "../../components/inputNotes/input";
import { useData } from "../../context/data";
import { FILTER } from "../../components/filter/filter";
import { Sidebar } from "../../components/sidebar/sidebar";
export const HomePage = () => {
  const { state, dispatch } = useData();
  const { data } = state;
  return (
    <main className="display-grid">
      <Header/>
      <Sidebar/>
      <section className="section">
        <select
          className="filters"
          onClick={(event) =>
            dispatch({ type: "ADD_FILTERS", payload: event.target.value })
          }
        >
          {data.length > 0 && <option value="">No tag</option>}
          <FILTER />
        </select>
        <Input />
        <h2>NOTES</h2>
        <div className="notes-container">
          <NOTES />
        </div>
      </section>
    </main>
  );
};
