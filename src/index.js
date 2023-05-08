const express = require('express');

const config = require('./config');
const server = express();

server.get('/', (req, res) => {
    res.send('Home page');
});

server.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
