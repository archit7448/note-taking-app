import { useData } from "../../context/data";

export const FILTER = () => {
  const { state } = useData();
  const { tagArray } = state;
  return tagArray.length > 0 ? (
    tagArray.map(({ _id, tag }) => {
      return (
        <option value={tag} key={_id}>
          {tag}
        </option>
      );
    })
  ) : (
    <option value="">No tag</option>
  );
};
