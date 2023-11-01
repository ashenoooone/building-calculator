import type { Meta, StoryObj } from '@storybook/react';
import { Range } from '~/shared/ui/Range';

const meta: Meta<typeof Range> = {
	title: 'shared/Range',
	component: Range
};

export default meta;
type Story = StoryObj<typeof Range>;
export const Default: Story = {
	args: {
		title: 'Площадь дома м2'
	}
};
