import type { Meta, StoryObj } from '@storybook/react';
import { Navlink } from './Navlink';

const meta: Meta<typeof Navlink> = {
	title: 'shared/Navlink',
	component: Navlink
};

export default meta;
type Story = StoryObj<typeof Navlink>;

export const Default: Story = {
	args: {
		title: '10'
	}
};

export const WithText: Story = {
	args: {
		title: '10',
		text: 'Фундамент'
	}
};
