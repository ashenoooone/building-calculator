import React, { useRef } from 'react';

export const useHover = () => {
	const [isHovering, setIsHovering] = React.useState(false);

	const handleMouseOver = React.useCallback(() => setIsHovering(true), []);
	const handleMouseOut = React.useCallback(() => setIsHovering(false), []);

	const nodeRef = useRef<HTMLElement | null>(null);

	const callbackRef = React.useCallback(
		(node: HTMLElement | null) => {
			if (nodeRef.current) {
				nodeRef.current.removeEventListener('mouseover', handleMouseOver);
				nodeRef.current.removeEventListener('mouseout', handleMouseOut);
			}

			nodeRef.current = node;

			if (nodeRef.current) {
				nodeRef.current.addEventListener('mouseover', handleMouseOver);
				nodeRef.current.addEventListener('mouseout', handleMouseOut);
			}
		},
		[handleMouseOver, handleMouseOut]
	);

	return [callbackRef, isHovering] as const;
};
