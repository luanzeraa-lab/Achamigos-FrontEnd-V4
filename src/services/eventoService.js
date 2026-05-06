import api from "./api";

const eventosService = {
  getAll: async () => (await api.get(`http://localhost:3002/api/eventos`)).data,
  getById: async (id) => (await api.get(`http://localhost:3002/api/eventos${id}`)).data,

   create: async (data) =>
    (await api.backend.post(`http://localhost:3002/api/eventos`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': 1234
      },
    })).data,

  update: async (id, data) => (await api.put(`http://localhost:3002/api/eventos/${id}`, data)).data,
  remove: async (id) => (await api.delete(`http://localhost:3002/api/eventos/${id}`)).data
};

export default eventosService ;
