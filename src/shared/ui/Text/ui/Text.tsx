import React, { memo } from 'react';
import { classNames } from '~/shared/lib/classNames';

interface TextProps {
	className?: string;
	text?: string;
	title?: string;
	textClasses?: string;
	titleClasses?: string;
	containerClasses?: string;
}

export const Text = memo((props: TextProps) => {
	const {
		className = '',
		title,
		text,
		titleClasses = '',
		textClasses = '',
		containerClasses = ''
	} = props;
	return (
		<div className={classNames(containerClasses, {}, [className])}>
			{title && <h2 className={titleClasses}>{title}</h2>}
			{text && <p className={textClasses}>{text}</p>}
		</div>
	);
});
