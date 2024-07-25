import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/login';

const loginUsuario = async (email, senha) => {
    try {
        const response = await axios.post(apiUrl, { email, senha });
        return response.data; // O token e os dados do usuário são retornados aqui
    } catch (error) {
        throw error.response.data;
    }
};

export default loginUsuario;
