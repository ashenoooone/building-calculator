import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
	title: 'Radio',
	component: Radio
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	args: {
		text: 'test text'
	}
};

export const checked: Story = {
	args: {
		checked: true,
		text: 'test text',
		onChange: () => console.log(1)
	}
};
