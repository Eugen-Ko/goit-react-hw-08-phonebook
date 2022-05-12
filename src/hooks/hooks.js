import { useEffect, useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
//------------------------------------------------------------------

export const useContactListHook = filter => {
  const [list, setList] = useState(null);
  const { data: contacts, isFetching, isLoading } = useFetchContactsQuery();
  useEffect(() => {
    filter !== ''
      ? setList(
          contacts.filter(({ name }) => name.toLowerCase().includes(filter))
        )
      : setList(contacts);
  }, [contacts, filter]);

  return { list, isFetching, isLoading };
};

//-------------------------------------------------------------------

export const useEditHook = id => {
  const { data: contacts } = useFetchContactsQuery();
  const fields = !id
    ? {
        title: `Add Contact : `,
        name: 'Sebastian Pereiro',
        number: '+38(000)000-00-00',
      }
    : {
        title: `Edit contact: `,
        ...contacts.find(contact => contact.id === id),
      };
  return { fields, contacts };
};
