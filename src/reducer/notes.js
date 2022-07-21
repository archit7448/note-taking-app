import axios from "axios";

export const addNotes = (state, action) => {
  return { ...state, notes: [...action.payload], notesData: {} };
};

export const addNotesToDatabase = (notes, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/notes/`,
        { note: notes },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      dispatch({ type: "ADD_NOTES", payload: response.data.notes });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const toggleEdit = (state, action) => {
  return {
    ...state,
    notes: state.notes.map((notesEach) =>
      notesEach._id === action.payload._id
        ? { ...notesEach, disabled: false }
        : notesEach
    ),
  };
};

export const updateDatabase = (notes, dispatch, id) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        { note: notes },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      dispatch({ type: "ADD_NOTES", payload: response.data.notes });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const deleteNotes = (dispatch, id) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      dispatch({
        type: "ADD_NOTES",
        payload: response.data.notes,
      });
    } catch (error) {
      console.log(error);
    }
  })();
};
