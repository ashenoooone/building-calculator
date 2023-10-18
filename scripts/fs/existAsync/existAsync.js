const fs = require('fs');

module.exports = (path) => {
	return new Promise(function (resolve, reject) {
		fs.exists(path, function (exists) {
			resolve(exists);
		});
	});
};
