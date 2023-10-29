import React, { CSSProperties, memo, useCallback, useMemo } from 'react';
import { classNames } from '~/shared/lib/classNames';
import cls from './Navlink.module.scss';
import DownSvg from '~/shared/assets/nav_down_dir.svg';

interface NavlinkProps {
	className?: string;
	text?: string | number;
	title: string | number;
	onClick?: () => void;
	width?: number;
	height?: number;
}

export const Navlink = memo((props: NavlinkProps) => {
	const {
		className = '',
		title,
		text,
		onClick,
		width = 46,
		height = 46
	} = props;

	const style = useMemo<CSSProperties>(() => {
		return {
			width,
			height
		};
	}, [height, width]);

	const onNavlinkClick = useCallback(() => {
		onClick?.();
	}, [onClick]);

	const content = useMemo(() => {
		return (
			<>
				<div
					style={style}
					className={cls.title}
				>
					{title}
				</div>
				{text && (
					<div className={cls.text}>
						<span>{text}</span> <DownSvg className={cls.icon} />
					</div>
				)}
			</>
		);
	}, [style, text, title]);

	return (
		<button
			type='button'
			onClick={onNavlinkClick}
			className={classNames(cls.Navlink, {}, [className])}
		>
			{content}
		</button>
	);
});
