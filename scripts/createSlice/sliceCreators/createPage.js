const path = require('path');
const fs = require('fs/promises');
const existsAsync = require('../../fs/existAsync/existAsync');
const createModel = require('./segments/createModel');
const createLib = require('./segments/createLib');
const createApi = require('./segments/createApi');
const createUi = require('./segments/createUi');
const createPublicApi = require('./segments/createPublicApi');

module.exports = async (sliceName) => {
	const pathToPages = path.resolve(__dirname, '..', '..', '..', 'src', 'pages');
	const isExists = await existsAsync(pathToPages);
	if (!isExists) {
		await fs.mkdir(pathToPages);
	}
	const pathToPagesFolder = path.join(pathToPages, sliceName);
	await fs.mkdir(pathToPagesFolder);
	const modelPath = path.join(pathToPagesFolder, 'model');
	const libPath = path.join(pathToPagesFolder, 'lib');
	const apiPath = path.join(pathToPagesFolder, 'api');
	const uiPath = path.join(pathToPagesFolder, 'ui');
	const publicApi = path.join(pathToPagesFolder);
	await createModel(modelPath, sliceName);
	await createLib(libPath, sliceName);
	await createApi(apiPath, sliceName);
	await createUi(uiPath, sliceName);
	await createPublicApi(publicApi, sliceName);
};
