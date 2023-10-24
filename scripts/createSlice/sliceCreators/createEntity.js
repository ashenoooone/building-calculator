const path = require('path');
const fs = require('fs/promises');
const existsAsync = require('../../fs/existAsync/existAsync');
const createModel = require('./segments/createModel');
const createLib = require('./segments/createLib');
const createUi = require('./segments/createUi');
const createPublicApi = require('./segments/createPublicApi');

module.exports = async (sliceName) => {
	const pathToEntities = path.resolve(__dirname, '..', '..', '..', 'src', 'entities');
	const isExists = await existsAsync(pathToEntities);
	if (!isExists) {
		await fs.mkdir(pathToEntities);
	}
	const pathToEntitiesFolder = path.join(pathToEntities, sliceName);
	await fs.mkdir(pathToEntitiesFolder);
	const modelPath = path.join(pathToEntitiesFolder, 'model');
	const libPath = path.join(pathToEntitiesFolder, 'lib');
	const uiPath = path.join(pathToEntitiesFolder, 'ui');
	const publicApi = path.join(pathToEntitiesFolder);
	await createModel(modelPath, sliceName);
	await createLib(libPath, sliceName);
	await createUi(uiPath, sliceName);
	await createPublicApi(publicApi, sliceName);
};
