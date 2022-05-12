import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-hot-toast';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
      keepUnusedDataFor: 5,
      validateStatus: response => {
        switch (response.status) {
          case 201:
            toast.success('Contacts found.', { duration: 4000 });
            break;
          case 401:
            toast.error('Missing authorization token.', { duration: 4000 });
            break;
          case 404:
            toast.error("There is no such owner's collection.", {
              duration: 4000,
            });
            break;
          case 500:
            toast.error('Server error.', { duration: 4000 });
            break;
          default:
            toast.success('Ot halepa', { duration: 4000 });
            break;
        }
      },
    }),
    deleteContact: builder.mutation({
      query: ({ id, name }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        validateStatus: response => {
          switch (response.status) {
            case 200:
              toast.success(`Contact '${name}' successfully removed.`, {
                duration: 4000,
              });
              break;
            case 401:
              toast.error('Missing authorization token.', { duration: 4000 });
              break;
            case 404:
              toast.error("There is no such owner's collection.", {
                duration: 4000,
              });
              break;
            case 500:
              toast.error('Server error.', { duration: 4000 });
              break;
            default:
              toast.success('Ot halepa', { duration: 4000 });
              break;
          }
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
        validateStatus: response => {
          switch (response.status) {
            case 201:
              toast.success(
                `Contact '${newContact.name}' successfully create.`,
                {
                  duration: 4000,
                }
              );
              break;
            case 400:
              toast.error('Contact create failed..', { duration: 4000 });
              break;
            case 401:
              toast.error('Missing authorization token.', { duration: 4000 });
              break;
            case 500:
              toast.error('Server error.', { duration: 4000 });
              break;
            default:
              toast.success('Ot halepa', { duration: 4000 });
              break;
          }
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
        validateStatus: response => {
          switch (response.status) {
            case 200:
              toast.success(`Contact '${name}' successfully update.`, {
                duration: 4000,
              });
              break;
            case 400:
              toast.error('Contact update failed..', { duration: 4000 });
              break;
            case 401:
              toast.error('Missing authorization token.', { duration: 4000 });
              break;
            case 500:
              toast.error('Server error.', { duration: 4000 });
              break;
            default:
              toast.success('Ot halepa', { duration: 4000 });
              break;
          }
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useEditContactMutation,
} = contactsApi;
