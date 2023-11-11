import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '~/widgets/Navbar';
import { Page } from '~/shared/ui/Page';
import { CalculatePrices } from '~/features/calculatePrices';
import { getCurrentStep, getSteps } from '~/entities/Step';
import { Result } from '~/entities/Result';
import { StepsMapper } from '~/widgets/StepsMapper';

export function App() {
	const currentStep = useSelector(getCurrentStep);
	const steps = useSelector(getSteps);

	const content = useMemo(() => {
		if (currentStep === 0) {
			return <CalculatePrices />;
		}
		if (currentStep === steps?.length) {
			return <Result />;
		}
		return <StepsMapper />;
	}, [currentStep, steps?.length]);

	return (
		<div>
			<Navbar />
			<Page className='px-10'>{content}</Page>
		</div>
	);
}
