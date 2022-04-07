export const FilterTag = (notesArray, tag) => {
  return tag === ""
    ? notesArray
    : notesArray.filter((notesData) => notesData.tag === tag);
};
