const fs = require('fs/promises');
const path = require('path');
const toLowerCase = require('../../../toLowerCase/toLowerCase');

const getThunkContent = (
	sliceName
) => `import { createAsyncThunk } from '@reduxjs/toolkit';
export const ${sliceName}Thunk = createAsyncThunk(
  '${sliceName}',
  async (_, thunkAPI) => {
  
  },
);
`;

module.exports = async (apiPath, sliceName) => {
	await fs.mkdir(apiPath);
	const thunkPath = path.join(apiPath, `${toLowerCase(sliceName)}Thunk.ts`);
	await fs.writeFile(thunkPath, getThunkContent(sliceName));
};
