import { Header } from "../../components/Header/Header";
import { InputArchived } from "../../components/inputArchived/input";
import { useData } from "../../context/data";

export const ARCHIVED = () => {
  return (
    <main>
      <Header />
      <section>
        <h1 className="text-grey text-center">ARCHIVED</h1>
        <div>
          <InputArchived />
        </div>
      </section>
    </main>
  );
};
