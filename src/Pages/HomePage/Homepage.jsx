import "./Homepage.css";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/input/input";
import { NOTES } from "../../components/inputNotes/input";
export const HomePage = () => {
  return (
    <main>
      <Header />
      <Input />
      <h2>NOTES</h2>
      <div className="notes-container">
        <NOTES />
      </div>
    </main>
  );
};
