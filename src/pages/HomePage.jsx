import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          padding: { xs: '16px', sm: '24px' },
        }}
      >
        <Typography
          textAlign="center"
          sx={{ paddingTop: '20px', fontSize: '24px', color: '#1976d2' }}
        >
          You have entered the phone contacts storage site.
        </Typography>
        <Typography
          textAlign="center"
          sx={{ fontSize: '24px', color: '#1976d2' }}
        >
          {' '}
          Stores contacts in the cloud - it's convenient and safe.{' '}
        </Typography>
      </Box>
    </>
  );
};
