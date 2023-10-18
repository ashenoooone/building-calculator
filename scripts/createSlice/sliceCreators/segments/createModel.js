const fs = require('fs/promises');
const path = require('path');
const toUpperCase = require('../../../toUpperCase/toUpperCase');
const getSliceContent = (sliceName) => `import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}Slice',
  initialState,
  reducers: {
  },
});

export const { actions: ${sliceName}SliceActions } = ${sliceName}Slice;
export const { reducer: ${sliceName}SliceReducer } = ${sliceName}Slice;
`;

const getTypesContent = (sliceName) => `export interface ${sliceName}Schema {
}`;

module.exports = async (modelPath, sliceName) => {
	await fs.mkdir(modelPath);
	const sliceFolderPath = path.join(modelPath, 'slice');
	const slicePath = path.join(sliceFolderPath, sliceName.toLowerCase() + 'Slice.ts');
	const typesPath = path.join(modelPath, 'types.ts');
	await fs.mkdir(sliceFolderPath);
	await fs.writeFile(typesPath, getTypesContent(toUpperCase(sliceName)));
	await fs.writeFile(slicePath, getSliceContent(sliceName));
};
