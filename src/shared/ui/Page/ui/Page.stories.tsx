import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
	title: 'Page',
	component: Page
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
	args: {
		children: (
			<div>
				<p>0</p>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
			</div>
		)
	}
};
