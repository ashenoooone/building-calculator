import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PopUp } from './PopUp';

const meta: Meta<typeof PopUp> = {
	title: 'shared/PopUp',
	component: PopUp,
	decorators: [
		(St) => (
			<div style={{ padding: 40 }}>
				<St />
			</div>
		)
	]
};

export default meta;
type Story = StoryObj<typeof PopUp>;

export const Default: Story = {
	args: {
		statusOpen: true,
		children: (
			<div>
				<div>проверка</div>
				<div>проверка</div>
			</div>
		)
	}
};
