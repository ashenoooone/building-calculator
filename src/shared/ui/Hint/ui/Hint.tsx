import React, { HTMLAttributes, ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import cls from './Hint.module.scss';
import { classNames } from '~/shared/lib/classNames';
import { useHover } from '~/shared/lib/useHover';
import { Directions } from '~/shared/types';

interface HintProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	hint: ReactNode;
	trigger: ReactNode;
	direction?: Directions;
}

const DirectionMapper: Record<Directions, string> = {
	'bottom center': cls.bottom_center,
	'bottom left': cls.bottom_left,
	'bottom right': cls.bottom_right,
	'left bottom': cls.left_bottom,
	'left top': cls.left_top,
	'right bottom': cls.right_bottom,
	'right top': cls.right_top,
	'top center': cls.top_center,
	'top left': cls.top_left,
	'top right': cls.top_right
};

export const Hint = (props: HintProps) => {
	const {
		className = '',
		hint,
		trigger,
		direction = 'bottom center',
		...rest
	} = props;
	const [hoverRef, isHover] = useHover();

	return (
		<div
			ref={hoverRef}
			className={classNames(cls.Hint, {}, [])}
			{...rest}
		>
			{trigger}
			<Transition
				as='div'
				show={isHover}
				enter='transition-opacity duration-200'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity duration-200'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
				className={classNames(cls.hint, {}, [
					DirectionMapper[direction],
					className
				])}
			>
				{hint}
			</Transition>
		</div>
	);
};
