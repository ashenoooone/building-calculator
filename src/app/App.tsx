import React, { ReactNode } from 'react';
import { Navlink } from '~/shared/ui/Navlink';
import { VStack } from '~/shared/ui/Stack';

interface AppProps {
	className?: string;
	children?: ReactNode;
}
export function App(props: AppProps) {
	const { className = '', children } = props;
	return (
		<VStack
			gap='16'
			align='center'
		>
			<Navlink
				title='10'
				text='Полы'
			/>
			<Navlink
				title='11'
				text='Фундамент'
			/>
			<Navlink
				title='12'
				text='Двери/окна'
			/>
		</VStack>
	);
}
