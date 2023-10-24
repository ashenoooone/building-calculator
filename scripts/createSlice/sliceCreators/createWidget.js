const path = require('path');
const fs = require('fs/promises');
const existsAsync = require('../../fs/existAsync/existAsync');
const createModel = require('./segments/createModel');
const createLib = require('./segments/createLib');
const createApi = require('./segments/createApi');
const createUi = require('./segments/createUi');
const createPublicApi = require('./segments/createPublicApi');

module.exports = async (sliceName) => {
	const pathToWidgets = path.resolve(__dirname, '..', '..', '..', 'src', 'widgets');
	const isExists = await existsAsync(pathToWidgets);
	if (!isExists) {
		await fs.mkdir(pathToWidgets);
	}
	const pathToWidgetsFolder = path.join(pathToWidgets, sliceName);
	await fs.mkdir(pathToWidgetsFolder);
	const modelPath = path.join(pathToWidgetsFolder, 'model');
	const libPath = path.join(pathToWidgetsFolder, 'lib');
	const apiPath = path.join(pathToWidgetsFolder, 'api');
	const uiPath = path.join(pathToWidgetsFolder, 'ui');
	const publicApi = path.join(pathToWidgetsFolder);
	await createModel(modelPath, sliceName);
	await createLib(libPath, sliceName);
	await createApi(apiPath, sliceName);
	await createUi(uiPath, sliceName);
	await createPublicApi(publicApi, sliceName);
};
