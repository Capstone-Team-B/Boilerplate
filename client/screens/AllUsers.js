import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllUsers } from '../redux/actions/allUsersActions';

const AllUsers = () => {
  // const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.allUsers);

  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {users.map((user) => (
        <View key={user.id} style={styles.item}>
          <Text style={styles.firstName}>{user.firstName}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  firstName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
});

export default AllUsers;
