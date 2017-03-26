const dataProvider = require('../data/mongo.provider');
const testModel = require('../model/test.model');

/**
 * create by Phuc Nguyen
 * 26/3/2017
 * 
 * @class HomepageCtrl
 */
class HomepageCtrl {


	static async basicTest(req, res, next) {
		let result;
		try {
			result = await dataProvider.findAll(testModel);
			return res.render('index', { result });
		} catch (err) {
			return next(err);
		}
	}
}

module.exports = HomepageCtrl;
