import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
	title: 'Card',
	component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

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
