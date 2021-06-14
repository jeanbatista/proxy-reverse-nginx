const express = require('express');

const app = express();

app.get('', (request, response) => {
    response.send('Hello aplication 02');
});

app.listen(3333, () => console.log('Server started in port 3333'));