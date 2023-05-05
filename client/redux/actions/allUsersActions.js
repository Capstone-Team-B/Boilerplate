import { MongoClient } from 'mongodb';
import { fetchAllUsersStart, fetchAllUsersSuccess, fetchAllUsersError } from './allUsersReducers.js';

export const fetchAllUsers = () => async dispatch => {
  dispatch(fetchAllUsersStart());
  const uri = process.env.DATABASE;
  const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await mongoClient.connect();
    const collection = mongoClient.db('beThere').collection('users');
    const users = await collection.find().toArray();
    dispatch(fetchAllUsersSuccess(users));
  } catch (err) {
    dispatch(fetchAllUsersError(err.message));
  } finally {
    await mongoClient.close();
  }
};
