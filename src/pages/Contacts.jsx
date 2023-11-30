import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { useGetAllContactsQuery } from 'redux/contacts/slice';
import ContactForm from 'components/ContactForm/ContactForm';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Contacts() {
  const { data } = useGetAllContactsQuery();

  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }} p={1}>
      <Grid container>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h3" component="h3" mt={2}>
            Contacts Book
          </Typography>
          <ContactForm />
          {data && data.length === 0 && (
            <Typography variant="h5" mt={2}>
              Create your first contact
            </Typography>
          )}

          {data && data.length !== 0 && (
            <>
              <TextField
                name="userFilter"
                label="Filter"
                variant="standard"
                fullWidth
                value={filter}
                onChange={handleFilter}
              />
              <List>
                {getFilteredContacts(data, filter).map(contact => (
                  <ContactCard key={contact.id} contact={contact} />
                ))}
              </List>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
