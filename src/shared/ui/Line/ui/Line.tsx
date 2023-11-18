import React, { FC, memo, ReactNode } from 'react';
import cls from './Line.module.scss';
import { classNames } from '~/shared/lib/classNames';

export type LineType = 'dashed' | 'solid';

interface LineProps {
	className?: string;
	type?: LineType;
}

export const Line = memo((props: LineProps) => {
	const { className = '', type = 'solid' } = props;
	return (
		<div className={classNames(cls.Line, {}, [className, cls[type]])}></div>
	);
});
