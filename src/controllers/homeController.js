const db = require('../db.json')

exports.getHomepage = (req, res) => {
    res.render('index', {cubes: db.cubes});
};


exports.getAboutPage = (req, res) => {
    res.render('about');
};