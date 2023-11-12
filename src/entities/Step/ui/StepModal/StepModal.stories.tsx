import type { Meta, StoryObj } from '@storybook/react';
import { StepModal } from './StepModal';

const meta: Meta<typeof StepModal> = {
	title: 'StepModal',
	component: StepModal
};

export default meta;
type Story = StoryObj<typeof StepModal>;

export const Default: Story = {};
