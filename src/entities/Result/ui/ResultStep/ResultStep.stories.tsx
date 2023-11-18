import type { Meta, StoryObj } from '@storybook/react';
import { ResultStep } from './ResultStep';

const meta: Meta<typeof ResultStep> = {
	title: 'ResultStep',
	component: ResultStep
};

export default meta;
type Story = StoryObj<typeof ResultStep>;

export const Default: Story = {};
