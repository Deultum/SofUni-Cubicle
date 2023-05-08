const express = require('express');


const routes = require('./routes');
const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');

const server = express();
setupViewEngine(server);

server.use(express.static('./src/public'));
server.use(routes)


server.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
