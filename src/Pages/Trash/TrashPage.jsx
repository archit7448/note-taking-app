import { Header } from "../../components/Header/Header";
import { InputTrash } from "../../components/inputTrash/InputTrash";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useData } from "../../context/data";

export const TrashPage = () => {
  const { state, dispatch } = useData();
  return (
    <main className="display-grid">
      <Header />
      <Sidebar />
      <section className="section">
        <InputTrash />
      </section>
    </main>
  );
};
