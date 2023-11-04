import React, { ReactNode } from 'react';
import cls from './Step.module.scss';

interface StepProps {
	className?: string;
	children?: ReactNode;
}

export const Step = (props: StepProps) => {
	const { className = '', children } = props;
	return <div className={cls.Step}>{children}</div>;
};
