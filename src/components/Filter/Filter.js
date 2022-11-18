import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <label>
      <span>Find contacts by name</span>
      <Input type="text" onChange={onChange}></Input>
    </label>
  );
};

export default Filter;
