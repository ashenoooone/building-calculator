import React, { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface SkeletonProps {
	className?: string;
	width: number | string;
	height: number | string;
	borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
	const { className = '', borderRadius, height, width } = props;

	const styles: CSSProperties = {
		width,
		height,
		borderRadius
	};
	return (
		<div
			style={styles}
			className={classNames(cls.Skeleton, {}, [className])}
		/>
	);
});
