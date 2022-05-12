import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Appbar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: '48px' }}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, height: '74px' }} />
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, height: '58px' }} />
    </>
  );
};
