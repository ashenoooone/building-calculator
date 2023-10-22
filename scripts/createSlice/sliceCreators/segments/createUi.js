const fs = require('fs/promises');
const path = require('path');
const toUpperCase = require('../../../toUpperCase/toUpperCase');

const interfaceConst = 'interface';
const storyConst = 'Story';

const getComponentContent = (sliceName) => `import React, { FC, ReactNode } from 'react';
import cls from "./${sliceName}.module.scss";

${interfaceConst} ${sliceName}Props {
  className?: string;
  children?: ReactNode;
}

export const ${sliceName} = (props: ${sliceName}Props) => {
  const { className='', children } = props;
  return (
  <div className={cls.${sliceName}}>
    {children}
  </div>
  );
};
`;
const getScssContent = (sliceName) => `.${sliceName} {

}
`;

const getSbContent = (sliceName) => `import { ${sliceName} } from './${sliceName}';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ${sliceName}> = {
  title: '${sliceName}',
  component: ${sliceName},
};

export default meta;
type ${storyConst} = StoryObj<typeof ${sliceName}>;

export const Default: Story = {
};`;

module.exports = async (uiPath, sliceName) => {
	await fs.mkdir(uiPath);
	const componentFolderPath = path.join(uiPath, toUpperCase(sliceName));
	await fs.mkdir(componentFolderPath);
	const componentPath = path.join(componentFolderPath, `${toUpperCase(sliceName)}.tsx`);
	const scssPath = path.join(
		componentFolderPath,
		`${toUpperCase(sliceName)}.module.scss`
	);
	const sbPath = path.join(componentFolderPath, `${toUpperCase(sliceName)}.stories.tsx`);
	await fs.writeFile(componentPath, getComponentContent(toUpperCase(sliceName)));
	await fs.writeFile(scssPath, getScssContent(toUpperCase(sliceName)));
	await fs.writeFile(sbPath, getSbContent(toUpperCase(sliceName)));
};
