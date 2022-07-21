import axios from "axios";
import {
  notifyError,
  notifyMessage,
} from "../utility/notification/notifcation";

export const addArchived = (state, action) => {
  return { ...state, archived: [...action.payload] };
};

export const updateArchived = (state, action) => {
  const { notesData, archivedData } = action.payload;
  return { ...state, archived: [...archivedData], notes: [...notesData] };
};

export const addNotesToArchived = (notes, dispatch, id) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${id}`,
        { note: notes },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      notifyMessage("Add to Archived");
      dispatch({
        type: "UPDATE_ARCHIVED",
        payload: {
          archivedData: response.data.archives,
          notesData: response.data.notes,
        },
      });
    } catch (error) {
      console.log(error);
      notifyError("ERROR!");
    }
  })();
};

export const deleteArchive = (dispatch, id) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/archives/delete/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      notifyMessage("Remove From Archived");
      dispatch({ type: "ADD_ARCHIVED", payload: response.data.archives });
    } catch (error) {
      console.log(error);
      notifyError("ERROR!");
    }
  })();
};

export const restoreArchive = (dispatch, id) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${id}`,
        {},
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      notifyMessage("RESTORE NOTES");
      dispatch({
        type: "UPDATE_ARCHIVED",
        payload: {
          archivedData: response.data.archives,
          notesData: response.data.notes,
        },
      });
    } catch (error) {
      console.log(error);
      notifyError("ERROR!");
    }
  })();
};
