import React, { ReactNode } from 'react';
import cls from './Page.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface PageProps {
	className?: string;
	children?: ReactNode;
}

export const Page = (props: PageProps) => {
	const { className = '', children } = props;
	return (
		<div className={classNames(cls.Page, {}, [className])}>{children}</div>
	);
};
