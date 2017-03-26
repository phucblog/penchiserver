const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
	data: {
		type: String
	}
});

module.exports = mongoose.model('Test', TestSchema, 'Test');
