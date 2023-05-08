const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

router.get('/', homeController.getHomepage);
router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCreateCube);


module.exports = router;