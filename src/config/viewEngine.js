const handlebars = require('express-handlebars');


function setupViewEngine(server) {
    server.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));
    server.set('view engine', 'hbs');
    server.set('views', './src/views');
};

module.exports = setupViewEngine;
