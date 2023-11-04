import type { Meta, StoryObj } from '@storybook/react';
import { CalculatePrices } from './CalculatePrices';

const meta: Meta<typeof CalculatePrices> = {
	title: 'CalculatePrices',
	component: CalculatePrices
};

export default meta;
type Story = StoryObj<typeof CalculatePrices>;

export const Default: Story = {};
