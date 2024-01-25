import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contactSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.account.filter);
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};
