import { Navbar } from './Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
};