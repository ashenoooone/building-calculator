import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '~/widgets/Navbar';
import { Page } from '~/shared/ui/Page';
import { CalculatePrices } from '~/features/calculatePrices';
import {
	getCurrentStep,
	getSteps,
	stepsActions,
	useGetStepsQuery
} from '~/entities/Step';
import { Result } from '~/entities/Result';
import { StepsMapper } from '~/widgets/StepsMapper';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';

export function App() {
	const currentStep = useSelector(getCurrentStep);
	const steps = useSelector(getSteps);
	const { isLoading } = useGetStepsQuery();

	const content = useMemo(() => {
		if (currentStep === 0) {
			return <CalculatePrices />;
		}
		if (currentStep === (steps?.length || 0) + 1) {
			return <Result />;
		}
		return <StepsMapper />;
	}, [currentStep, steps?.length]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<Page>
			<Navbar className='px-10 pt-4' />
			<div>{content}</div>
		</Page>
	);
}
