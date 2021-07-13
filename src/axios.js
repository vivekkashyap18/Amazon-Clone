import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-3ba8d.cloudfunctions.net/api'
    //'http://localhost:5001/clone-3ba8d/us-central1/api'
});

export default instance;
