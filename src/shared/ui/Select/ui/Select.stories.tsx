import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
	title: 'shared/Select',
	component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		value: 'test',
		selectOptions: [
			{
				value: 'test',
				disabled: false,
				content: 'TEST CONTENT0'
			},
			{
				value: 'test0',
				disabled: false,
				content: 'TEST CONTENT1'
			},
			{
				value: 'test1',
				disabled: true,
				content: 'TEST CONTENT2'
			},
			{
				value: 'test2',
				disabled: false,
				content: 'TEST CONTENT3'
			}
		]
	}
};

export const Placeholder: Story = {
	args: {
		placeholder: 'placeholder',
		selectOptions: [
			{
				value: 'test',
				disabled: false,
				content: 'TEST CONTENT0'
			},
			{
				value: 'test0',
				disabled: false,
				content: 'TEST CONTENT1'
			},
			{
				value: 'test1',
				disabled: true,
				content: 'TEST CONTENT2'
			},
			{
				value: 'test2',
				disabled: false,
				content: 'TEST CONTENT3'
			}
		]
	}
};
