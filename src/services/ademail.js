import axios from 'axios';

// Para aprender a usar: https://gitlab.com/agenciaade/dev/ademail
const ademail = axios.create({
  baseURL: 'https://api.agenciaade.com.br',
});

export default ademail;
