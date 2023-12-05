import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  FullMeetupInfo,
  SimpleMeetupInfo,
} from '../../../backend/src/controllers/meetups';

export const meetupSlice = createApi({
  reducerPath: 'meetupSlice',
  tagTypes: ['Meetups', 'Meetup'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (builder) => ({
    getMeetups: builder.query<SimpleMeetupInfo[], void>({
      query: () => ({
        url: `meetups/`,
      }),
      providesTags: ['Meetups'],
    }),
    getMeetup: builder.query<FullMeetupInfo, number>({
      query: (id) => ({
        url: `meetups/${id}`,
      }),
      providesTags: ['Meetup'],
    }),
  }),
});

export const { useGetMeetupsQuery, useGetMeetupQuery } = meetupSlice;
