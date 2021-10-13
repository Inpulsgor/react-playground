import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://firebase.com',
});

/*
 * TOKEN
 */

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * CRUD REQUESTS
 */

export const getData = () => instance.get('/test');
export const createData = data => instance.post('/test', data);
export const deleteData = id => instance.delete(`/test/${id}`);
export const updateData = (id, data) => instance.patch(`/test/${id}`, data);
