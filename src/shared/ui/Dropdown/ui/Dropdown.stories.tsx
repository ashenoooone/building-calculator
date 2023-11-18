import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
	title: 'Dropdown',
	component: Dropdown
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
