import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { toast } from 'react-toastify';
import ContactEditor from 'components/ContactEditor/ContactEditor';

export const ContactCard = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleDelete = () => {
    deleteContact(contact.id)
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
      })
      .catch(() => {
        toast.error('Error');
      });
  };

  const openEditor = () => {
    setOpenEdit(prevState => !prevState);
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          {contact.name}: {contact.number}
        </ListItemText>
        <IconButton edge="end" aria-label="delete" onClick={openEditor}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      {openEdit && <ContactEditor closeEditor={openEditor} contact={contact} />}
    </>
  );
};
