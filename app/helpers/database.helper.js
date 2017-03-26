const Config = require('../config/database.config');
const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));

class DatabaseHelper {
	static init() {
		const URL = Config.MongodbServer.URL;
		const option = { promiseLibrary: require('bluebird') };

		mongoose.Promise = require('bluebird');
		mongoose.connect(URL, option);

		const DB = mongoose.connection;

		// connection Event
		// Thong bao Khi hoan ket noi thanh cong
		DB.on('connected', () => {
			console.log('Mongoose default connection open');
		});
		// Thong bao Khi ngat ket noi
		DB.on('disconnected', () => {
			console.log('Mongoose default connection disconnected');
		});
		// Thong bao ket noi that bai
		DB.on('error', (err) => {
			console.log('Mongoose default connection error: ' + err);
		});
		// Khi node server ngung, ngat ket noi den database va thong bao
		process.on('SIGINT', () => {
			mongoose.connection.close(() => {
				console.log('Mongoose default connection disconnected through app termination');
				process.exit(0);
			});
		});
	}
}

module.exports = DatabaseHelper;
