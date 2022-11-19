import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <p>
        {contact.name}: <span>{contact.phone}</span>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
