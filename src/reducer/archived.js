import axios from "axios";
export const AddArchived = (state, notes) => {
  const token = localStorage.getItem("token");
  const { data, tagArray } = state;
  const { _id, tag } = notes;
  (async (id, notes) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/:${id}`,
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
  })(_id, notes);
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
    archived: [...state.archived, { ...notes }],
    tagArray:
      data.reduce((acc, curr) => {
        curr.tag === tag ? (acc = acc + 1) : acc;
        return acc;
      }, 0) > 1
        ? [...tagArray]
        : tagArray.filter((note) => note.tag !== tag),
  };
};

export const RemoveArchived = (state, payload) => {
  const { _id } = payload;
  const { archived, trash } = state;
  const token = localStorage.getItem("token");
  (async (id) => {
    try {
      const response = await axios.delete(`/api/archives/delete/:${id}`, {
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
    archived: archived.filter((notes) => notes._id !== _id),
    trash: [...trash, payload],
  };
};

export const ToggleDisableArchived = (state, payload) => {
  const { archived } = state;
  const { _id } = payload;
  return {
    ...state,
    archived: archived.map((notes) =>
      notes._id === _id ? { ...notes, disabled: false } : notes
    ),
  };
};

export const EditArchived = (state, payload) => {
  const { title, _id, notes } = payload;
  const { archived } = state;
  return {
    ...state,
    archived: archived.map((notesData) =>
      notesData._id === _id
        ? { ...notesData, title: title, notes: notes }
        : notesData
    ),
  };
};

export const SaveArchived = (state, payload) => {
  const { _id } = payload;
  const { archived } = state;
  const token = localStorage.getItem("token");
  const notesBackend = archived.find((notes) => notes._id === _id);
  (async (id, notes) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/:${id}`,
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
    archived: archived.map((notes) =>
      notes._id === _id ? { ...notes, disabled: true } : notes
    ),
  };
};
