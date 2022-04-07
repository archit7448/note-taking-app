import axios from "axios";
import { v4 as uuid } from "uuid";

export const AddNotes = (state, payload) => {
  const token = localStorage.getItem("token");
  const notes = { _id: uuid(), ...payload };
  const { tag, _id } = notes;
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
    title: "",
    notes: "",
    colors: "",
    tag: "",
    tagArray: state.tagArray.find((notesTag) => notesTag.tag === tag)
      ? [...state.tagArray]
      : [...state.tagArray, { tag, _id }],
  };
};

export const EditNotes = (state, payload) => {
  const { title, _id, notes } = payload;
  const { data } = state;
  return {
    ...state,
    data: data.map((notesData) =>
      notesData._id === _id
        ? { ...notesData, title: title, notes: notes }
        : notesData
    ),
  };
};

export const SaveData = (state, payload) => {
  const { _id } = payload;
  const { data } = state;
  const token = localStorage.getItem("token");
  const notesBackend = data.find((notes) => notes._id === _id);
  (async (id, notes) => {
    try {
      const response = await axios.post(
        `/api/notes/:${id}`,
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
  })(_id, notesBackend);
  return {
    ...state,
    data: data.map((notes) =>
      notes._id === _id ? { ...notes, disabled: true } : notes
    ),
  };
};

export const RemoveNotes = (state, payload) => {
  const { _id, tag } = payload;
  const { data, trash, tagArray } = state;
  const token = localStorage.getItem("token");
  (async (id) => {
    try {
      const response = await axios.delete(`/api/notes/:${id}`, {
        headers: {
          authorization: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })(_id);
  return {
    ...state,
    data: data.filter((notes) => notes._id !== _id),
    trash: [...trash, payload],
    tagArray:
      data.reduce((acc, curr) => {
        curr.tag === tag ? (acc = acc + 1) : acc;
        return acc;
      }, 0) > 1
        ? [...tagArray]
        : tagArray.filter((note) => note.tag !== tag),
  };
};

export const ToggleDisableNotes = (state, payload) => {
  const { data } = state;
  const { _id } = payload;
  return {
    ...state,
    data: data.map((notes) =>
      notes._id === _id ? { ...notes, disabled: false } : notes
    ),
  };
};
