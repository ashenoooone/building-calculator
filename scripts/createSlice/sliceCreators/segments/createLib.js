const fs = require('fs/promises');

module.exports = async (path) => {
	await fs.mkdir(path);
};
