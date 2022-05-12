import { Typography } from '@mui/material';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

export const LogoElement = ({ xs, md, variant = 'h5', flexGrow = '1' }) => {
  return (
    <>
      <ContactPhoneOutlinedIcon sx={{ display: { xs: 'none', md }, mr: 1 }} />
      <Typography
        variant={`${variant}`}
        noWrap
        component="a"
        sx={{
          mr: 2,
          ml: 1,
          display: { xs: xs, md: md },
          flexGrow: flexGrow,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        PHONEBOOK
      </Typography>
    </>
  );
};
