import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useData } from "../../context/data";
export const LabelPage = () => {
  const { state } = useData();
  const { data, tagArray } = state;
  return (
    <main className="display-grid">
      <Header />
      <Sidebar />
      <section className="section">
        {tagArray.map(({ tag, _id }) => {
          return (
            <div key={_id}>
              <h1>{tag}</h1>
              {data.map((notesData) => {
                const { _id, title, notes, disabled, colors } = notesData;
                console.log(notesData.tag === tag);
                return notesData.tag === tag ? (
                  <div className={`CardDesign ${colors}`} key={_id}>
                    <input
                      type="text"
                      placeholder="title"
                      value={title}
                      disabled={disabled}
                      className={colors}
                    />
                    <hr />
                    <textarea
                      type="text"
                      placeholder="notes..."
                      value={notes}
                      disabled={disabled}
                      className={colors}
                    />
                  </div>
                ) : (
                  <div></div>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
};
