const express = require('express');
const cookieParser = require('cookie-parser');


const routes = require('./routes');
const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseinit');


const server = express();
setupViewEngine(server);



server.use(express.static('./src/public'));
server.use(cookieParser());
server.use(express.urlencoded({extended: false}));
server.use(routes)

initDatabase()
.then(()=> server.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
.catch((err) => console.log(err));

