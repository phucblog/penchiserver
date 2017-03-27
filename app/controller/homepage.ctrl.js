const dataProvider = require('../data/mongo.provider');
const testModel = require('../model/test.model');

/**
 * create by Phuc Nguyen
 * 26/3/2017
 * 
 * @class HomepageCtrl
 */
class HomepageCtrl {

/*
	TASK-2: lấy danh sách bài viết và gán vào req.listArticles
*/
	static showDefaultPage(req, res, next) {
		// viết = async hay promise ji cung dc
		// const listArticles = dataProvider.findAll(ArticleModel);
		// req.listArticles = listArticles;
		// next();
	}

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
