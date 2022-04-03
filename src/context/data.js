import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { intialState } from "../reducer/intialState";
import { reducer } from "../reducer/reducer";
const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
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
          dispatch({ type: "ADD_INTIAL_NOTES", payload: response.data.notes });
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

  useEffect(() => {
    token !== null &&
      (async () => {
        try {
          let response = await axios.get("/api/archives", {
            headers: {
              authorization: token,
            },
          });
          dispatch({ type: "ADD_INTIAL_ARCHIVES", payload: response.data.archives });
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
