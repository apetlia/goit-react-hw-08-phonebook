import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useAddContactMutation } from 'redux/contacts/slice';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [sendContact] = useAddContactMutation();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newContact = {
      name: data.get('name'),
      number: data.get('number'),
    };

    sendContact(newContact)
      .unwrap()
      .then(() => {
        toast.success('Contact created');
      })
      .catch(() => {
        toast.error('Error');
      });

    event.currentTarget.reset();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="User name"
          name="name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type="tel"
          id="number"
          label="User phone"
          name="number"
          inputProps={{ pattern: '[0-9 +]{6,16}' }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 1 }}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
