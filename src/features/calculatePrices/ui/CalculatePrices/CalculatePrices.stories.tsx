import { CalculatePrices } from './CalculatePrices';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CalculatePrices> = {
  title: 'CalculatePrices',
  component: CalculatePrices,
};

export default meta;
type Story = StoryObj<typeof CalculatePrices>;

export const Default: Story = {
};