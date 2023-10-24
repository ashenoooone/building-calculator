const fs = require('fs');

module.exports = (path) => {
	return new Promise((resolve, reject) => {
		fs.exists(path, (exists) => {
			resolve(exists);
		});
	});
};
