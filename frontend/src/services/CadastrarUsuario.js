import axios from 'axios';

const cadastrarUsuario = async (formData) => {
  try {
    const response = await axios.post("http://localhost:3001/api/usuario", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default cadastrarUsuario;
