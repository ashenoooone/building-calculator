import React, { memo, ReactNode, SelectHTMLAttributes } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '~/shared/lib/classNames';
import cls from './Select.module.scss';
import { Directions } from '~/shared/types';

type valueType = string | number;

export interface SelectOption {
	content?: ReactNode;
	value: valueType;
	disabled?: boolean;
}

type HTMLSelectPropsOmitted = Omit<
	SelectHTMLAttributes<HTMLSelectElement>,
	'value' | 'onChange'
>;

interface SelectProps extends HTMLSelectPropsOmitted {
	className?: string;
	placeholder?: string;
	direction?: Directions;
	value?: valueType;
	selectOptions?: SelectOption[];
	onChange?: (value: valueType) => void;
}

const DirectionMapper: Record<Directions, string> = {
	'bottom center': cls.bottom_center,
	'bottom left': cls.bottom_left,
	'bottom right': cls.bottom_right,
	'left bottom': cls.left_bottom,
	'left top': cls.left_top,
	'right bottom': cls.right_bottom,
	'right top': cls.right_top,
	'top center': cls.top_center,
	'top left': cls.top_left,
	'top right': cls.top_right
};

export const Select = memo((props: SelectProps) => {
	const {
		className = '',
		placeholder = '',
		direction = 'bottom left',
		selectOptions,
		value,
		onChange
	} = props;

	return (
		<Listbox
			value={value}
			onChange={onChange}
			as='div'
			className={classNames(cls.Select, {}, [className])}
		>
			<Listbox.Button className={cls.trigger}>
				{value ?? placeholder}
			</Listbox.Button>
			<Listbox.Options
				className={classNames(cls.options, {}, [DirectionMapper[direction]])}
			>
				{selectOptions.map((option) => (
					<Listbox.Option
						className={classNames(
							cls.option,
							{ [cls.disabled]: option.disabled },
							[]
						)}
						key={option.value}
						value={value}
						disabled={option.disabled}
					>
						{option.content}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
});
