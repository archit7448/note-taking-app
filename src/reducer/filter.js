import { notifySuccess } from "../utility/notification/notifcation";

export const updateTag = (state, action) => {
  return {
    ...state,
    tagFilter: {
      ...state.tagFilter,
      [action.payload]: !state.tagFilter[action.payload],
    },
  };
};
export const updateColor = (state, action) => {
  return {
    ...state,
    colorFilter: {
      ...state.colorFilter,
      [action.payload]: !state.colorFilter[action.payload],
    },
  };
};

export const updatePriorty = (state, action) => {
  return { ...state, priortyFilter: action.payload };
};

export const updateDelete = (state, action) => {
  return { ...state, deleteFilter: [...state.deleteFilter, action.payload] };
};

export const restoreNotes = (state, action) => {
  return {
    ...state,
    deleteFilter: state.deleteFilter.filter(
      (dataArray) => dataArray._id !== action.payload
    ),
  };
};

export const filterDeletedData = (notes, deleteFilter) => {
  return notes.filter((data) => {
    return !deleteFilter.find(({ _id }) => _id === data._id);
  });
};

export const tagFilterFunc = (notesArray, tag) => {
  const tagArray = Object.keys(tag).filter((value) => tag[value] === true);
  return tagArray.length === 0
    ? notesArray
    : notesArray.filter(({ tag }) => {
        const getData = (tag) => {
          return tagArray.filter((value) => value === tag);
        };
        return getData(tag).length === 0 ? false : true;
      });
};
export const colorFilterFunc = (notesArray, color) => {
  const colorArray = Object.keys(color).filter(
    (value) => color[value] === true
  );
  return colorArray.length === 0
    ? notesArray
    : notesArray.filter(({ colors }) => {
        const getData = (colors) => {
          return colorArray.filter((value) => value === colors);
        };
        return getData(colors).length === 0 ? false : true;
      });
};

export const priortyFilterFunc = (notesArray, priorty) => {
  return priorty === ""
    ? notesArray
    : notesArray.filter((notesData) => notesData.priorty === priorty);
};
