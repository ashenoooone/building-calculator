import React, { ReactNode } from 'react';
import cls from './Card.module.scss';
import { classNames } from '~/shared/lib/classNames';

type CardStyle = 'default' | 'inverted';

interface CardProps {
	className?: string;
	children?: ReactNode;
	type?: CardStyle;
	border?: boolean;
}

export const Card = (props: CardProps) => {
	const { className = '', children, type = 'default', border = true } = props;
	return (
		<div
			className={classNames(cls.Card, { [cls.border]: border }, [
				className,
				cls[type]
			])}
		>
			{children}
		</div>
	);
};
