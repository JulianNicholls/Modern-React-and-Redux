import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 5, // Default, in any case
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
