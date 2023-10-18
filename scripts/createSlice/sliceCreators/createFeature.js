const path = require('path');
const fs = require('fs/promises');
const createModel = require('./segments/createModel');
const createLib = require('./segments/createLib');
const createApi = require('./segments/createApi');
const createUi = require('./segments/createUi');
const createPublicApi = require('./segments/createPublicApi');

const existsAsync = require('../../fs/existAsync/existAsync');

module.exports = async (sliceName) => {
	const pathToFeatures = path.resolve(__dirname, '..', '..', '..', 'src', 'features');
	const isExists = await existsAsync(pathToFeatures);
	if (!isExists) {
		await fs.mkdir(pathToFeatures);
	}
	const pathToFeatureFolder = path.join(pathToFeatures, sliceName);
	await fs.mkdir(pathToFeatureFolder);
	const modelPath = path.join(pathToFeatureFolder, 'model');
	const libPath = path.join(pathToFeatureFolder, 'lib');
	const apiPath = path.join(pathToFeatureFolder, 'api');
	const uiPath = path.join(pathToFeatureFolder, 'ui');
	const publicApi = path.join(pathToFeatureFolder);
	await createModel(modelPath, sliceName);
	await createLib(libPath, sliceName);
	await createApi(apiPath, sliceName);
	await createUi(uiPath, sliceName);
	await createPublicApi(publicApi, sliceName);
};
