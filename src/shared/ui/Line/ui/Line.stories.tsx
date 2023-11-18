import type { Meta, StoryObj } from '@storybook/react';
import { Line } from './Line';

const meta: Meta<typeof Line> = {
	title: 'Line',
	component: Line
};

export default meta;
type Story = StoryObj<typeof Line>;

export const Default: Story = {};
