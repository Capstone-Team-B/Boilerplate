import { createAsyncThunk } from '@reduxjs/toolkit';
// import { MongoClient } from 'mongodb';
import {
  fetchSingleUserError,
  fetchSingleUserStart,
  fetchSingleUserSuccess,
} from './SingleUserReducers';
import axios from 'axios';

//FETCH REQUESTS OF GUEST & HOST //
// get myself
export const fetchSingleUser = createAsyncThunk('user/fetch', async (id) => {
  try {
    const { data } = axios.get(`api/users/${id}`);
    return data;
  } catch (error) {
    return 'no such user exists';
  }
});

// get all upcoming events //
export const fetchUserEvents = createAsyncThunk(
  'userEvents/fetch',
  async (id) => {
    try {
      const { data } = axios.get(`api/users/${id}/events`);
      return data;
    } catch (error) {
      return 'No events';
    }
  }
);

// get event archive //
export const fetchEventsHistory = createAsyncThunk(
  'userEventsHistory/fetch',
  async (id) => {
    try {
      const { data } = axios.get(`api/users/${id}/history`);
      return data;
    } catch (error) {
      return 'No event history';
    }
  }
);

// get selected event //
export const fetchSingleEvent = createAsyncThunk(
  'singleEvent/fetch',
  async (id) => {
    try {
      const { data } = axios.get(`api/events/${id}`);
      return data;
    } catch (error) {
      return 'No such events';
    }
  }
);

// get guest list for event
export const fetchGuestList = createAsyncThunk(
  'guestList/fetch',
  async (id) => {
    try {
      const { data } = axios.get(`api/events/${id}/guests`);
      return data;
    } catch (error) {
      return 'No such events';
    }
  }
);

///// PUT REQUESTS OF GUEST ///
// change profile put
// export const editSingleUser = createAsyncThunk();
// edit messageboard post

// Post requsts guest
// post photos
// export
// post to message board

///// GET REQUESTS OF HOSTS ///
// get pending event

///// PUT REQUESTS OF HOSTS ///
// add guests
// remove guests
// edit event
// approve photos on message board?
// edit push notifications

//post requests Host
// create pending guest?
// push notifications

//Delete requests of hosts
// delete event

// export const fetchSingleUser = () => async dispatch => {
//     dispatch(fetchSingleUserStart());
//     const uri = process.env.DATABASE;
//     const mongoClient = new MongoClient(uri. {useUnifiedTopology: true});
//     try {
//         await mongoClient.connect();
//         const collection = mongoClient.db("beThere"). collection('users')
//     } catch (error) {

//     }
// }
