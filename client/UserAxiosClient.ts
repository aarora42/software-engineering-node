<<<<<<< HEAD

import axios, { AxiosResponse } from 'axios';
import User from "../models/User";
// axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.baseURL = 'https://anusha-node-a4.herokuapp.com/api';
=======
import axios, { AxiosResponse } from 'axios';
import User from "../models/users/User";
// axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.baseURL = 'https://cs5500-01-sp22.herokuapp.com/api';
>>>>>>> f3f128028dce7c60ac61daec0c0e2a87ff6cc2ef

const findAllUsers = async () =>
    await axios.get('/users');

const findUserById = async (uid: string) => {
<<<<<<< HEAD
    return await axios.get(`/users/${uid}`);
}

const createUser = async (user: User) =>
    await axios.post('/users', user);

const updateUser = async (uid: string, user: User) =>
    await axios.put(`/users/${uid}`, user);

const deleteUser = async (uid: string) =>
    await axios.delete(`/users/${uid}`);
=======
  return await axios.get(`/users/${uid}`);
}

const createUser = async (user: User) =>
  await axios.post('/users', user);

const updateUser = async (uid: string, user: User) =>
  await axios.put(`/users/${uid}`, user);

const deleteUser = async (uid: string) =>
  await axios.delete(`/users/${uid}`);
>>>>>>> f3f128028dce7c60ac61daec0c0e2a87ff6cc2ef

// deleteUser('6206b4ff02c280db0f2e62b5')
//   .then(response => console.log(response.data));

// updateUser('6206b4ff02c280db0f2e62b5',
//   {username: 'john', password: 'doe', email: 'joe@somebody.com'})
//   .then(response => console.log(response.data));

// createUser({username: 'john', password: 'doe', email: 'joe@nobody.com'})
//   .then(response => console.log(response.data));
// findUserById('61fe91c82902a4a7c81c4dd9')
//     .then(response => console.log(response.data));
// findAllUsers()
//     .then(response => console.log(response.data))