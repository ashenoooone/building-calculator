import React, { InputHTMLAttributes, memo, ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import cls from './Checkbox.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	text?: ReactNode;
	checked?: boolean;
	textClasses?: string;
}

export const Checkbox = memo((props: CheckboxProps) => {
	const {
		className,
		children,
		onChange,
		checked = false,
		text,
		name,
		textClasses,
		...rest
	} = props;
	return (
		<div className={cls.checkbox_container}>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label className={cls.checkbox_label}>
				<input
					name={name}
					type='checkbox'
					checked={checked}
					onChange={onChange}
					className={cls.checkbox_input}
					{...rest}
				/>
				<div
					className={classNames(
						cls.checkbox_box,
						{ [cls.checkbox_box_active]: checked },
						[]
					)}
				>
					<Transition
						show={checked}
						as='div'
						className={cls.checkbox_animation}
						enter='transition duration-450'
						enterFrom='scale-0 opacity-0'
						enterTo='scale-100 opacity-100'
						leave='transition duration-450'
						leaveFrom='scale-100 opacity-100'
						leaveTo='scale-0 opacity-0'
					>
						<svg
							className={cls.checkbox_icon}
							viewBox='0 0 24 24'
						>
							<path
								className={cls.checkbox_path}
								d='M4,12 9,17 20,6'
							/>
						</svg>
					</Transition>
				</div>
				<div className={classNames(cls.checkbox_text, {}, [textClasses])}>
					{text}
				</div>
			</label>
		</div>
	);
});
