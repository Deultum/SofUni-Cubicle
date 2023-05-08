const express = require('express');



const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');

const server = express();
setupViewEngine(server);




server.get('/', (req, res) => {
    res.render('home');
});

server.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
