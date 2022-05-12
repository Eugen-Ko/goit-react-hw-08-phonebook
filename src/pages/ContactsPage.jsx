import { ContactList } from 'components/ContactList/ContactList';
import { Outlet } from 'react-router-dom';

export const ContactsPage = () => {
  return (
    <div>
      <ContactList />
      <Outlet />
    </div>
  );
};
