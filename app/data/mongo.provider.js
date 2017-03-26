/**
 * create by Phuc Nguyen
 * 26/3/2017
 * 
 * @class MongoProvider
 */
class MongoProvider {
	
	static findOne(Model, queryOpts, documentField) {
		return Model.findOneAsync(queryOpts, documentField);
	}

	static findAll(Model) {
		return Model.findAsync();
	}
}

module.exports = MongoProvider;
