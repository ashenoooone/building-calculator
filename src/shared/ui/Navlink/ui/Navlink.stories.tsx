import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navlink } from './Navlink';

const meta: Meta<typeof Navlink> = {
	title: 'shared/Navlink',
	component: Navlink,
	decorators: [
		(St) => (
			<div style={{ padding: 40 }}>
				<St />
			</div>
		)
	]
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

export const Active: Story = {
	args: {
		title: '10',
		status: 'active',
		text: 'Фундамент'
	}
};

export const Visited: Story = {
	args: {
		title: '10',
		status: 'visited',
		text: 'Фундамент'
	}
};

export const Blocked: Story = {
	args: {
		title: '10',
		text: 'Фундамент',
		status: 'blocked'
	}
};
