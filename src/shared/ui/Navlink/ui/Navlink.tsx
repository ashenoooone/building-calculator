import React, {
	CSSProperties,
	memo,
	ReactNode,
	useCallback,
	useMemo
} from 'react';
import { Transition } from '@headlessui/react';
import { classNames } from '~/shared/lib/classNames';
import cls from './Navlink.module.scss';
import { useHover } from '~/shared/lib/useHover';

export type NavlinkStatusType = 'active' | 'visited' | 'blocked';

interface NavlinkProps {
	className?: string;
	text?: string | number;
	title: string | number | ReactNode;
	onClick?: () => void;
	width?: number;
	height?: number;
	status?: NavlinkStatusType;
}

export const Navlink = memo((props: NavlinkProps) => {
	const {
		className = '',
		title,
		text,
		onClick,
		width = 46,
		height = 46,
		status = 'active'
	} = props;
	const [hoverRef, isHover] = useHover();

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
					<Transition
						as='div'
						show={isHover}
						enter='transition-opacity duration-200'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						className={classNames(cls.text, {}, [])}
					>
						<span>{text}</span>
					</Transition>
				)}
			</>
		);
	}, [isHover, style, text, title]);

	return (
		<button
			ref={hoverRef}
			type='button'
			onClick={onNavlinkClick}
			className={classNames(cls.Navlink, {}, [className, cls[status]])}
		>
			{content}
		</button>
	);
});
