import axios from "axios";
import {
  notifyError,
  notifyMessage,
} from "../utility/notification/notifcation";
const token = localStorage.getItem("token");

export const AddArchived = (state, action) => {
  return { ...state, archived: [...action.payload] };
};

export const UpdateArchived = (state, action) => {
  const { notesData, archivedData } = action.payload;
  return { ...state, archived: [...archivedData], notes: [...notesData] };
};

export const AddNotesToArchived = (notes, dispatch, id) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${id}`,
        { note: notes },
        {
          headers: {
            authorization: token,
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

export const DeleteArchive = (dispatch, id) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/archives/delete/${id}`, {
        headers: {
          authorization: token,
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

export const RestoreArchive = (dispatch, id) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${id}`,
        {},
        {
          headers: {
            authorization: token,
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
