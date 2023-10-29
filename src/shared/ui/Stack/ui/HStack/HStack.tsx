import React, { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction' | 'ref'>;

export const HStack: React.FC<HStackProps> = memo((props) => {
	const { children } = props;
	return (
		<Flex
			direction='row'
			{...props}
		>
			{children}
		</Flex>
	);
});
