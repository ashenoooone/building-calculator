const path = require('path');
const fs = require('fs/promises');
const toUpperCase = require('../../../toUpperCase/toUpperCase');
const toLowerCase = require('../../../toLowerCase/toLowerCase');

const getIndexTsContent = (sliceName) => `export { ${toUpperCase(
	sliceName
)} } from './ui/${toUpperCase(sliceName)}/${toUpperCase(sliceName)}'
export { ${sliceName}SliceActions, ${sliceName}SliceReducer  } from './model/slice/${toLowerCase(
	sliceName
)}Slice'
`;

module.exports = async (publicApiPath, sliceName) => {
	const indexPath = path.join(publicApiPath, 'index.ts');
	await fs.writeFile(indexPath, getIndexTsContent(sliceName));
};
