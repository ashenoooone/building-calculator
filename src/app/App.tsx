import React from 'react';
import { Navbar } from '~/widgets/Navbar';
import { Page } from '~/shared/ui/Page';
import { CalculatePrices } from '~/features/calculatePrices';

export function App() {
	return (
		<Page>
			<Navbar />
			<CalculatePrices />
		</Page>
	);
}
