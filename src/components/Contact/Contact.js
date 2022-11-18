import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  return (
    <div>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};
