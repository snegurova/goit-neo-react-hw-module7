import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={styles.searchBox}
    />
  );
};

export default SearchBox;
