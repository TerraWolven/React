import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OwNFFH2Cf3O_vgolpsdCd6wz9UnLudO4nCGuhMJAO0M'
  }
});
