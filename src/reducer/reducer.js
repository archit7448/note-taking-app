import { AddNotes, ToggleEdit } from "./notes";
import { AddArchived, UpdateArchived } from "./archived";
import { AddTrash, RemoveTrash, RestoreNotes, RestoreTrash } from "./trash";
const AddColors = (state, action) => {
  return { ...state, colors: action.payload };
};

const AddNotesData = (state, action) => {
  return { ...state, quill: action.payload };
};
const reducer = {
  ADD_NOTES: AddNotes,
  ADD_COLOR: AddColors,
  ADD_NOTES_DATA: AddNotesData,
  TOGGLE_DISABLED: ToggleEdit,
  ADD_ARCHIVED: AddArchived,
  UPDATE_ARCHIVED: UpdateArchived,
  ADD_NOTES_TRASH: AddTrash,
  REMOVE_TRASH: RemoveTrash,
  RESTORE_NOTES: RestoreNotes,
};

export const ReducerFunc = (state, action) => {
  return reducer[action.type](state, action);
};

export const IntialState = {
  notes: [],
  colors: "",
  colorArray: [
    "color-one",
    "color-two",
    "color-three",
    "color-four",
    "color-five",
    "color-six",
  ],
  quill: {},
  archived: [],
  trash: [],
};
