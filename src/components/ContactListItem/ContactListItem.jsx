import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Grid, Avatar, Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { stringAvatar } from 'services/stringAvatar';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [showModal, setShowModal] = useState(false);

  return (
    <Grid item xs={4} sm={4} md={4} lg={3}>
      <Box
        sx={{
          border: '1px solid grey',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '5px',
        }}
      >
        <Avatar aria-label="Avatar" {...stringAvatar(name)} />
        <Box sx={{ marginLeft: '16px', width: '100%' }}>
          <Typography variant="subtitle1" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ marginBottom: '10px' }}
            variant="subtitle1"
            component="div"
          >
            {number}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ marginRight: '10px' }}
              onClick={() => setShowModal(true)}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="outlined"
              size="small"
              color="error"
              onClick={() => {
                deleteContact({ id, name });
              }}
              disabled={isLoading}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
      {showModal && (
        <ModalWindow showModal onClose={() => setShowModal(false)} id={id} />
      )}
    </Grid>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
