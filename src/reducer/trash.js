import axios from "axios";
export const RestoreNotes = (state, notes) => {
  const token = localStorage.getItem("token");
  const { trash } = state;
  const { _id } = notes;
  (async (notes) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note: notes },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  })(notes);
  return {
    ...state,
    data: [...state.data, { ...notes, disabled: true }],
    trash: trash.filter((notes) => notes._id !== _id),
  };
};

export const TrashDelete = (state, id) => {
  return { ...state, trash: state.trash.filter((notes) => notes._id !== id) };
};
