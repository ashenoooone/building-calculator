const generateSlice = require('./generateSlice');
const slice = process.argv[2];
const segment = process.argv[3];

if (!slice || !segment) {
	throw new Error('Нет названия slice или sliceName');
}

(async () => {
	await generateSlice(slice, segment);
})();
