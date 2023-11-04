declare module '*.scss' {
	const content: { [key: string]: any };
	export = content;
}

declare module '*.svg' {
	import React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __API__: string;
declare const __IS_DEV__: boolean;
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
