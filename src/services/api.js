import axios from 'axios';

const backend = axios.create({
<<<<<<< HEAD
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
=======
  baseURL: process.env.NEXT_PUBLIC_API_URL,
>>>>>>> main
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
  },
});

const vacinas = axios.create({
<<<<<<< HEAD
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://localhost:8081',
=======
  baseURL: process.env.NEXT_PUBLIC_API_URL,
>>>>>>> main
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
  },
});

export default { backend, vacinas };
