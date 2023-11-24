import React, { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';
import { classNames } from '~/shared/lib/classNames';

export type CardStyle = 'default' | 'inverted' | 'custom';
type Paddings = 'paddings_sm' | 'paddings_m' | 'paddings_xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: ReactNode;
	type?: CardStyle;
	border?: boolean;
	paddings?: Paddings;
}

export const Card = (props: CardProps) => {
	const {
		className = '',
		children,
		paddings = 'paddings_sm',
		type = 'default',
		border = true,
		...other
	} = props;
	return (
		<div
			className={classNames(cls.Card, { [cls.border]: border }, [
				className,
				cls[paddings],
				cls[type]
			])}
			{...other}
		>
			{children}
		</div>
	);
};
