import path from 'path';
import { BuildEnv, BuildPaths } from './config/build/types';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
	const port = 3000 || env.port;
	const mode = env.mode || 'development';
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
		src: path.resolve(__dirname, 'src'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html')
	};

	const apiUrl = env.apiUrl || 'http://localhost:8000';

	return buildWebpackConfig({
		port,
		paths,
		mode,
		apiUrl
	});
};
