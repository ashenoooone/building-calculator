import type { Meta, StoryObj } from '@storybook/react';
import { StepsMapper } from './StepsMapper';

const meta: Meta<typeof StepsMapper> = {
	title: 'StepsMapper',
	component: StepsMapper
};

export default meta;
type Story = StoryObj<typeof StepsMapper>;

export const Default: Story = {};
