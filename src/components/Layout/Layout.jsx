import { AppBar } from 'components/AppBar/AppBar';

import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container p={4} bg="#e8ffff" maxWidth="1050px">
      <AppBar />
      <Outlet />
      <Toaster />
    </Container>
  );
};
