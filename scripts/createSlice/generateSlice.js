const createFeature = require('./sliceCreators/createFeature');
const createWidget = require('./sliceCreators/createWidget');
const createEntity = require('./sliceCreators/createEntity');
const createPage = require('./sliceCreators/createPage');

const Slices = ['features', 'widgets', 'pages', 'entities'];

const SliceMapper = {
	features: createFeature,
	widgets: createWidget,
	pages: createPage,
	entities: createEntity
};

module.exports = async (slice, sliceName) => {
	if (!Slices.includes(slice)) {
		throw new Error('Нет такого слайса');
	}
	await SliceMapper[slice](sliceName);
};
