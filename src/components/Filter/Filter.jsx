export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </>
  );
};
