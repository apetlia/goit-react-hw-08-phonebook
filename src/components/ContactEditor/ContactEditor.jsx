import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import { useEditContactMutation } from 'redux/contacts/slice';

const ContactEditor = ({ closeEditor, contact }) => {
  const [editContact] = useEditContactMutation();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newContact = {
      name: data.get('name'),
      number: data.get('number'),
    };

    editContact({ id: contact.id, data: newContact })
      .unwrap()
      .then(() => {
        toast.success('Contact edited');
      })
      .catch(() => {
        toast.error('Error');
      });

    closeEditor();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          id="name"
          label="User name"
          name="name"
          defaultValue={contact.name}
          fullWidth
        />
        <TextField
          margin="normal"
          required
          type="tel"
          id="number"
          label="User phone"
          name="number"
          inputProps={{ pattern: '[0-9 +]{6,16}' }}
          defaultValue={contact.number}
          fullWidth
        />

        <Button type="submit" variant="contained" fullWidth>
          Edit
        </Button>
      </Box>
    </>
  );
};

export default ContactEditor;
