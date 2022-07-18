const token = localStorage.getItem("token");
import axios from "axios";

export const AddTrash = (state, action) => {
  const { notes, trashLoad } = action.payload;
  return {
    ...state,
    trash: [...state.trash, trashLoad],
    notes: [...notes],
  };
};

export const RemoveTrash = (state, action) => {
  const { _id } = action.payload;
  return {
    ...state,
    trash: state.trash.filter((trashData) => trashData._id !== _id),
  };
};

export const RestoreTrash = (dispatch, notes) => {
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
      dispatch({ type: "RESTORE_NOTES", payload: response.data.notes });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const RestoreNotes = (state, action) => {
  const { _id } = action.payload;
  return {
    ...state,
    trash: state.trash.filter((trashData) => trashData._id !== _id),
    notes: [...action.payload],
  };
};
