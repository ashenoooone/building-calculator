import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navlink } from './Navlink';

const meta: Meta<typeof Navlink> = {
	title: 'shared/Navlink',
	component: Navlink
};

export default meta;
type Story = StoryObj<typeof Navlink>;

export const Default: Story = {
	decorators: [
		(St) => (
			<div style={{ padding: 40 }}>
				<St />
			</div>
		)
	],
	args: {
		title: '10'
	}
};

export const WithText: Story = {
	decorators: [
		(St) => (
			<div style={{ padding: 40 }}>
				<St />
			</div>
		)
	],
	args: {
		title: '10',
		text: 'Фундамент'
	}
};
