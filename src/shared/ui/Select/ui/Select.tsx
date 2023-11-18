import React, { Fragment, memo, ReactNode, SelectHTMLAttributes } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import cls from './Select.module.scss';
import { Directions } from '~/shared/types';
import ChevronDown from '~/shared/assets/chevron_down.svg';
import { classNames } from '~/shared/lib/classNames';

export type valueType = string | number;

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
	label?: string;
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
		label,
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
			<div className={cls.trigger_container}>
				<Listbox.Button className={cls.trigger}>
					{label && <span className={cls.label}>{label}</span>}
					{placeholder && !value && (
						<span className='text-gray-400'>{placeholder}</span>
					)}
					{value && (
						<span>{selectOptions.find((i) => i.value === value).content}</span>
					)}
					<span className={cls.icon_container}>
						<ChevronDown
							className={cls.icon}
							aria-hidden='true'
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options
						className={classNames(cls.options, {}, [
							DirectionMapper[direction]
						])}
					>
						{selectOptions?.map((option) => (
							<Listbox.Option
								key={`${option.value}${option.content}`}
								className={({ active, selected }) =>
									classNames(
										cls.option,
										{
											[cls.option_active]: active,
											[cls.option_selected]: selected
										},
										[]
									)
								}
								value={option.value}
							>
								{({ selected }) => (
									<span
										className={classNames(
											cls.option_span,
											{ [cls.option_span_active]: selected },
											[]
										)}
									>
										{option.content}
									</span>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
});
