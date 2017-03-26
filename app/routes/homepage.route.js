const express = require('express');
const homepageRouter = express.Router();

homepageRouter.route('/')
	.get((req, res) => {
		res.render('index', { title: 'Phuc is here' });
	});

module.exports = homepageRouter;
