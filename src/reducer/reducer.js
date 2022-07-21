import { addNotes, toggleEdit } from "./notes";
import { addArchived, updateArchived } from "./archived";
import {
  updateTag,
  updateColor,
  updatePriorty,
  updateDelete,
  restoreNotes,
} from "./filter";
const addColors = (state, action) => {
  return { ...state, colors: action.payload };
};

const addNotesData = (state, action) => {
  return { ...state, quill: action.payload };
};

const resetFilter = (state) => {
  return {
    ...state,
    tagFilter: {
      code: false,
      exercise: false,
      health: false,
      fun: false,
    },
    priortyFilter: "",
    colorFilter: {
      "color-one": false,
      "color-two": false,
      "color-three": false,
      "color-four": false,
      "color-five": false,
      "color-six": false,
    },
  };
};

const reducer = {
  ADD_NOTES: addNotes,
  ADD_COLOR: addColors,
  ADD_NOTES_DATA: addNotesData,
  TOGGLE_DISABLED: toggleEdit,
  ADD_ARCHIVED: addArchived,
  UPDATE_ARCHIVED: updateArchived,
  UPDATE_TAG: updateTag,
  UPDATE_PRIORTY: updatePriorty,
  UPDATE_COLOR_FILTER: updateColor,
  DELETE_NOTES: updateDelete,
  RESTORE_NOTES: restoreNotes,
  RESET_FILTER: resetFilter,
};

export const ReducerFunc = (state, action) => {
  return reducer[action.type](state, action);
};

export const IntialState = {
  notes: [],
  colors: "color-two",
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
  tagFilter: {
    code: false,
    exercise: false,
    health: false,
    fun: false,
  },
  priortyFilter: "",
  colorFilter: {
    "color-one": false,
    "color-two": false,
    "color-three": false,
    "color-four": false,
    "color-five": false,
    "color-six": false,
  },
  deleteFilter: [],
};
