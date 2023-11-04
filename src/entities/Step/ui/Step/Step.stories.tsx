import { Step } from './Step';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Step> = {
  title: 'Step',
  component: Step,
};

export default meta;
type Story = StoryObj<typeof Step>;

export const Default: Story = {
};