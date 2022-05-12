import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContactListHook } from 'hooks/hooks';
import { TextField, Button, Box, Grid, Container } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { BallTriangle } from 'react-loader-spinner';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const { list, isFetching, isLoading } = useContactListHook(filter);

  return (
    <>
      <Box sx={{ padding: { xs: '16px', sm: '24px' }, display: 'flex' }}>
        <Button
          variant="contained"
          size="small"
          sx={{ display: { xs: 'none', md: 'flex' } }}
          onClick={() => navigate('/edit')}
        >
          Add contact...
        </Button>
        <Button
          variant="contained"
          size="small"
          aria-label="Add contact"
          sx={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            display: { xs: 'flex', md: 'none' },
          }}
          onClick={() => navigate('/edit')}
        >
          <AddIcCallIcon
            sx={{
              color: 'white',
              fontSize: 25,
            }}
          />
        </Button>

        {list && (
          <TextField
            onChange={e => setFilter(e.target.value.toLowerCase().trim())}
            label="Input search name..."
            type="search"
            variant="standard"
            size="small"
            sx={{ marginLeft: '20px' }}
          />
        )}
      </Box>
      {isFetching && <BallTriangle color="#00BFFF" height={80} width={80} />}
      {list && !isFetching && !isLoading && (
        <Container sx={{ padding: '16px' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          >
            {list.map(el => (
              <ContactListItem key={el.id} {...el} />
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};
