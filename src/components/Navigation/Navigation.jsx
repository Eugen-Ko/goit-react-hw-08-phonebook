import { HStack, Flex, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  let activeStyle = {
    color: 'blue',
  };
  return (
    <Flex maxWidth="100%">
      <HStack>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Phone Book
        </NavLink>
      </HStack>
      <Spacer />
      <HStack>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Log In
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Sign Up
        </NavLink>
        <span>Welcome, Carl !!!</span>
        <span>LogOut</span>
      </HStack>
    </Flex>
  );
};
