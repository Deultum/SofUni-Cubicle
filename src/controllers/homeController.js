const db = require('../db.json')

exports.getHomepage = (req, res) => {
    const { search, from, to } = req.query;
    let cubes = db.cubes;

    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    res.render('index', { cubes, search });
};


exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getErrorPage = (req, res) => {
    res.render('404');
}