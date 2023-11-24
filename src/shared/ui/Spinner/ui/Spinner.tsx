import React, { CSSProperties, memo, useMemo } from 'react';
import cls from './Spinner.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface SpinnerProps {
	className?: string;
	width?: number;
	height?: number;
}

export const Spinner = memo((props: SpinnerProps) => {
	const { className = '', height = 48, width = 48 } = props;

	const styles = useMemo<CSSProperties>(() => {
		return {
			width,
			height
		};
	}, [height, width]);

	return (
		<span
			style={styles}
			className={classNames(cls.Spinner, {}, [className])}
		/>
	);
});
