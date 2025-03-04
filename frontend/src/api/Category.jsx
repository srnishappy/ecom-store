import axios from 'axios';
export const createCategory = async (token, form) => {
  return await axios.post('http://localhost:5000/api/category', form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const ListCategory = async () => {
  return await axios.get('http://localhost:5000/api/category');
};
export const RemoveCategory = async (token, id) => {
  return await axios.delete('http://localhost:5000/api/category/' + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
