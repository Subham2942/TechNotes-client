import  {createApi, fetchBaseQuery } from '@reduxjs/toolkit';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Note', 'User'],
    endpoints: builder =>({})
})