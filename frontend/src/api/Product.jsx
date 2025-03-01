import axios from 'axios';
export const createProduct = async (token, form) => {
  return await axios.post('http://localhost:5000/api/product', form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
// แก้ไขฟังก์ชัน listProduct
export const listProduct = async (token, count = 20) => {
  return axios.get(`http://localhost:5000/api/products/` + count, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
