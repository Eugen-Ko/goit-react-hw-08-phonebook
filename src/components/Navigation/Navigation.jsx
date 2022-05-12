import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoElement } from 'components/LogoElement/LogoElement';
import * as styled from './styledObj';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
  return (
    <>
      <LogoElement xs={'none'} md={'flex'} variant={'h6'} flexGrow={'0'} />

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          sx={{ ...styled.IconButtonObj }}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ ...styled.MenuObj }}
        >
          <MenuItem key="HomePage" onClick={handleCloseNavMenu}>
            <Typography textAlign="center" onClick={() => navigate('/')}>
              Home
            </Typography>
          </MenuItem>
          {isLoggedIn && (
            <MenuItem key="Contacts" onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                onClick={() => {
                  navigate('/contacts');
                }}
              >
                Contacts
              </Typography>
            </MenuItem>
          )}
        </Menu>
      </Box>
      <LogoElement xs={'flex'} md={'none'} />

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button
          key="HomePage"
          onClick={() => {
            handleCloseNavMenu();
            navigate('/');
          }}
          sx={{ my: 2, color: 'white', display: 'block', margin: '0' }}
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            key="Contacts"
            onClick={() => {
              handleCloseNavMenu();
              navigate('/contacts');
            }}
            sx={{ my: 2, color: 'white', display: 'block', margin: '0' }}
          >
            Contacts
          </Button>
        )}
      </Box>
    </>
  );
};
