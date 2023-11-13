import type { Meta, StoryObj } from '@storybook/react';
import { ProductSkeleton } from './ProductSkeleton';

const meta: Meta<typeof ProductSkeleton> = {
	title: 'entities/Product/ProductSkeleton',
	component: ProductSkeleton
};

export default meta;
type Story = StoryObj<typeof ProductSkeleton>;

export const Default: Story = {
	args: {}
};
