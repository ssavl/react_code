import axios from "axios";

// const ax = require('axios');

export const JsonCall = async () => {
    try {
        const x = await axios.get('http://jsonplaceholder.typicode.com/posts');

        return x
    } catch (e) {
        console.log(e)
    }

}

console.log('test' ,JsonCall())

