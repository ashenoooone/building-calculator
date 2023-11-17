import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className = '',
		children,
		type = 'button',
		disabled,
		...other
	} = props;
	return (
		<button
			type={type}
			className={classNames(cls.Button, { [cls.disabled]: disabled }, [
				className
			])}
			{...other}
		>
			{children}
		</button>
	);
});
