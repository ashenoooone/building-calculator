import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
	title: 'Hint',
	component: Hint
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Default: Story = {
	args: {
		trigger: <button className='rounded-lg bg-white p-2'>hover</button>,
		hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec aliquam mauris. Phasellus scelerisque gravida lacus. Sed nec varius enim, a molestie leo'
	}
};
