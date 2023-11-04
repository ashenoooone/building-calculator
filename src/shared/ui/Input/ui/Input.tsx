import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import { classNames } from '~/shared/lib/classNames';

type HTMLInputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

type InputType = Exclude<HTMLInputTypeAttribute, 'checkbox' | 'radio'>;

interface InputProps extends HTMLInputAttributes {
	className?: string;
	type?: InputType;
	label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const {
			className = '',
			type = 'text',
			placeholder = ' ',
			label,
			...rest
		} = props;

		return (
			// eslint-disable-next-line jsx-a11y/label-has-associated-control
			<label className={classNames(cls.Input, {}, [className])}>
				<input
					placeholder={placeholder}
					className={cls.input}
					ref={ref}
					type={type}
					{...rest}
				/>
				<span className={cls.label}>{label}</span>
			</label>
		);
	}
);
