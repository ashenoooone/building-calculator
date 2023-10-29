import React, { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction' | 'ref'>;

export const VStack = memo((props: VStackProps) => {
	const { align = 'start', children } = props;
	return (
		<Flex
			{...props}
			direction='column'
			align={align}
		>
			{children}
		</Flex>
	);
});
