import axios from 'axios';

const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '12345',
  },
});

const vacinas = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://localhost:8081',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '12345',
  },
});

export default { backend, vacinas };
