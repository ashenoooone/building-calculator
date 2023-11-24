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
import { Result, ResultSliceActions } from '~/entities/Result';
import { StepsMapper } from '~/widgets/StepsMapper';
import { useGetCalculatorVersionQuery } from '~/entities/Calculator';
import { CALC_VERSION_LOCAL_STORAGE_KEY } from '~/shared/consts';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import { Spinner } from '~/shared/ui/Spinner';

export function App() {
	const currentStep = useSelector(getCurrentStep);
	const dispatch = useAppDispatch();
	const steps = useSelector(getSteps);
	const { isLoading: isGetCalculatorVersionLoading, data } =
		useGetCalculatorVersionQuery();
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

	useEffect(() => {
		const localCalcVersion = JSON.parse(
			localStorage.getItem(CALC_VERSION_LOCAL_STORAGE_KEY)
		);

		if (data && localCalcVersion !== data.version) {
			dispatch(ResultSliceActions.drop());
			dispatch(stepsActions.setCurrentStep(0));
			localStorage.setItem(
				CALC_VERSION_LOCAL_STORAGE_KEY,
				JSON.stringify(data.version)
			);
		}
	}, [data, data?.version, dispatch]);

	if (isLoading || isGetCalculatorVersionLoading) {
		return (
			<div className='min-h-screen w-full flex items-center justify-center'>
				<Spinner />
			</div>
		);
	}

	return (
		<Page>
			<Navbar className='px-10 pt-4' />
			<div>{content}</div>
		</Page>
	);
}
