import React from 'react';
import { Navbar } from '~/widgets/Navbar';
import { Page } from '~/shared/ui/Page';
import { CalculatePrices } from '~/features/calculatePrices';

export function App() {
	return (
		<div>
			<Navbar />
			<Page className='px-10'>
				<CalculatePrices />
			</Page>
		</div>
	);
}
