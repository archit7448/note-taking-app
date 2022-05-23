import axios from "axios";
const token = localStorage.getItem("token");

export const AddNotes = (state, action) => {
  return { ...state, notes: [...action.payload], notesData: {} };
};

export const AddNotesToDataBase = (notes, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/notes/`,
        { note: notes },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "ADD_NOTES", payload: response.data.notes });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const ToggleEdit = (state, action) => {
  return {
    ...state,
    notes: state.notes.map((notesEach) =>
      notesEach._id === action.payload._id
        ? { ...notesEach, disabled: false }
        : notesEach
    ),
  };
};

export const UpdateDataBase = (notes, dispatch, id) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        { note: notes },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "ADD_NOTES", payload: response.data.notes });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const DeleteNotes = (dispatch, id) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "ADD_NOTES", payload: response.data.notes });
    } catch (error) {
      console.log(error);
    }
  })();
};
