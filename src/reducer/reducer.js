import { AddNotes, EditNotes, RemoveNotes, SaveData } from "./notes";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INTIAL_NOTES":
      return { ...state, data: [...action.payload] };
    case "ADD_NOTES":
      return AddNotes(state, action.payload);
    case "EDIT_NOTES":
      return EditNotes(state, action.payload);
    case "TOGGLE_DISABLED":
      const { data } = state;
      const { _id } = action.payload;
      return {
        ...state,
        data: data.map((notes) =>
          notes._id === _id ? { ...notes, disabled: false } : notes
        ),
      };
    case "SAVE_TOGGLE_DISABLED":
      return SaveData(state, action.payload);
    case "REMOVE_NOTES":
      return RemoveNotes(state, action.payload);
    default:
      return { state };
  }
};
