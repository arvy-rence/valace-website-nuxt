import axios from 'axios';

export default axios.create({
    // TODO change to ValACE API backend
    baseURL:"https://hainco-api.herokuapp.com/",
});