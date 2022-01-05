const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000',

});
// .then(resp => {
//     data = resp.data;
//     data.forEach(e => {
//         console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
//     });
// })
// .catch(error => {
//     console.log(error);
// });

