import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Appbar } from 'components/Appbar/Appbar';
import Container from '@mui/material/Container';

export const Layout = () => {
  return (
    <Container disableGutters={true}>
      <Appbar />
      <Suspense fallback={<div>{/* <Spin /> */}</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
