const express = require('express');
const homepageRouter = express.Router();

const homepageCtrl = require('../controller/homepage.ctrl');

homepageRouter.route('/').get(homepageCtrl.basicTest);

module.exports = homepageRouter;
