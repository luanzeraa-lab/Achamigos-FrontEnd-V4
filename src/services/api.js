import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '1234',
  },
});


const vacinas = axios.create({
  baseURL: 'https://localhost:8081/api/vacinas',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '1234',
  },
});                             

export default { backend, vacinas };
