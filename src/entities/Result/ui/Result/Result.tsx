import React, { ReactNode } from 'react';
import cls from './Result.module.scss';

interface ResultProps {
	className?: string;
	children?: ReactNode;
}

export const Result = (props: ResultProps) => {
	const { className = '', children } = props;
	return <div className={cls.Result}>{children}</div>;
};
