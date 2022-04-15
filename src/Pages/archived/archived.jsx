import { Header } from "../../components/Header/Header";
import { InputArchived } from "../../components/inputArchived/input";
import { Sidebar } from "../../components/sidebar/sidebar";

export const ARCHIVED = () => {
  return (
    <main className="display-grid">
      <Header />
      <Sidebar />
      <section className="section">
        <h1 className="text-grey text-center">ARCHIVED</h1>
        <div>
          <InputArchived />
        </div>
      </section>
    </main>
  );
};
