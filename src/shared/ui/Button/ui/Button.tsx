import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const { className = '', children, type = 'button', ...other } = props;
	return (
		<button
			type={type}
			className={classNames(cls.Button, {}, [className])}
			{...other}
		>
			{children}
		</button>
	);
});
