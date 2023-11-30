import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const contactsSliceAPI = createApi({
  reducerPath: 'contacts',
  baseQuery,
  tagTypes: ['contacts'],
  endpoints: build => ({
    getAllContacts: build.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    addContact: build.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    editContact: build.mutation({
      query: ({ id, data }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsSliceAPI;
