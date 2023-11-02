import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'shared/Checkbox',
	component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
	args: {
		checked: false,
		text: 'TEST'
	}
};

export const Checked: Story = {
	args: {
		checked: true,
		text: '213132iopi21'
	}
};
