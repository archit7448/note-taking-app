import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { IntialState } from "../reducer/reducer";
import { ReducerFunc } from "../reducer/reducer";
const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFunc, IntialState);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token !== null &&
      (async () => {
        try {
          let response = await axios.get("/api/notes", {
            headers: {
              authorization: token,
            },
          });
          dispatch({ type: "ADD_NOTES", payload: response.data.notes });
        } catch (error) {
          console.log(error);
        }
      })();
  }, [token]);

  useEffect(() => {
    token !== null &&
      (async () => {
        try {
          let response = await axios.get("/api/archives", {
            headers: {
              authorization: token,
            },
          });
          dispatch({
            type: "ADD_ARCHIVED",
            payload: response.data.archives,
          });
        } catch (error) {
          console.log(error);
        }
      })();
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        notes: state.notes,
        colors: state.colors,
        dispatch,
        colorArray: state.colorArray,
        quill: state.quill,
        archived: state.archived,
        trash: state.trash,
        colorFilter: state.colorFilter,
        tagFilter: state.tagFilter,
        priortyFilter: state.priortyFilter,
        deleteFilter: state.deleteFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
