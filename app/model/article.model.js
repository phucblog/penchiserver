const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	body: {
		type: String
	},
	country: {
		type: String
	},
	provincial: {
		type: String
	},
	category: {
		type: String
	},
	tag: {
		type: [String]
	},
	status: {
		type: String
	},
	postById: {
		type: Schema.Types.ObjectId
	},
	postByName: {
		type: String
	},
	postOn: {
		type: Date
	},
	publichOn: {
		type: Date
	},
	saveOn: {
		type: Date
	},
	editOn: {
		type: Date
	}
});

module.exports = mongoose.model('Article', ArticleSchema, 'Article');
