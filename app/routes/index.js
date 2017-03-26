class AppllicationRoutes {
	
	static init(app) {

		const homepageRouter = require('./homepage.route');
		app.use('/', homepageRouter);
	}
}

module.exports = AppllicationRoutes;
