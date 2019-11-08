import axios from 'axios';

const headers = {
  Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS}`,
};

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers,
});
