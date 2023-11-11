import type { Meta, StoryObj } from '@storybook/react';
import { Result } from './Result';

const meta: Meta<typeof Result> = {
	title: 'Result',
	component: Result
};

export default meta;
type Story = StoryObj<typeof Result>;

export const Default: Story = {};
