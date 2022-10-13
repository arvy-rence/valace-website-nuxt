import axios from 'axios';

export default axios.create({
    // baseURL:"https://valace-api.herokuapp.com/api",
    baseURL:"http://localhost:8080/api",
});