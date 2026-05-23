import axios from 'axios';

const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
  },
});

const vacinas = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
  },
});

export default { backend, vacinas };
