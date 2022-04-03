import {
  AddNotes,
  EditNotes,
  RemoveNotes,
  SaveData,
  ToggleDisableNotes,
} from "./notes";
import {
  AddArchived,
  EditArchived,
  RemoveArchived,
  ToggleDisableArchived,
  SaveArchived,
} from "./archived";

export const reducer = (state, action) => {
  switch (action.type) {
    case "TITLE_INPUT":
      return { ...state, title: action.payload };
    case "TITLE_NOTES":
      return { ...state, notes: action.payload };
    case "ADD_INTIAL_NOTES":
      return { ...state, data: [...action.payload] };
    case "ADD_NOTES":
      return AddNotes(state, action.payload);
    case "EDIT_NOTES":
      return EditNotes(state, action.payload);
    case "TOGGLE_DISABLED":
      return ToggleDisableNotes(state, action.payload);
    case "SAVE_TOGGLE_DISABLED":
      return SaveData(state, action.payload);
    case "REMOVE_NOTES":
      return RemoveNotes(state, action.payload);
    case "ADD_INTIAL_ARCHIVES":
      return { ...state, archived: [...action.payload] };
    case "ADD_TO_ARCHIVED":
      return AddArchived(state, action.payload);
    case "REMOVE_ARCHIVED":
      return RemoveArchived(state, action.payload);
    case "TOGGLE_DISABLED_ARCHIVED":
      return ToggleDisableArchived(state, action.payload);
    case "EDIT_ARCHIVED":
      return EditArchived(state, action.payload);
    case "SAVE_ARCHIVED_TOGGLE":
      return SaveArchived(state, action.payload);
    default:
      return { state };
  }
};
