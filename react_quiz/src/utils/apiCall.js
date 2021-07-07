import axios from "axios";

// const ax = require('axios');

export const JsonCall = () => {
    const x = axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => response.data)

    return x
}