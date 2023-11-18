import React, { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';
import { Navlink, NavlinkStatusType } from '~/shared/ui/Navlink';
import { classNames } from '~/shared/lib/classNames';
import { HStack } from '~/shared/ui/Stack';
import HomeSvg from '~/shared/assets/home.svg';
import CalcSvg from '~/shared/assets/calc.svg';
import {
	getCurrentStep,
	getSteps,
	getStepsError,
	getStepsIsLoading,
	stepsActions
} from '~/entities/Step';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import { checkIfAllStepsChecked, getResultSteps } from '~/entities/Result';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
	const { className = '' } = props;
	const isLoading = useSelector(getStepsIsLoading);
	const error = useSelector(getStepsError);
	const steps = useSelector(getSteps);
	const currentStep = useSelector(getCurrentStep);
	const dispatch = useAppDispatch();
	const stepsResults = useSelector(getResultSteps);
	const allStepsChecked = useSelector(checkIfAllStepsChecked);

	const getNavlinkStatus = (idx: number): NavlinkStatusType => {
		if (currentStep === idx) {
			return 'active';
		}
		const isVisited =
			stepsResults.find((i) => i.order === idx)?.values.length > 0;
		if (isVisited) {
			return 'visited';
		}
		return 'blocked';
	};

	const onNavlinkClick = useCallback(
		(step: number) => {
			return () => {
				dispatch(stepsActions.setCurrentStep(step));
			};
		},
		[dispatch]
	);

	const resultButtonStatus = useMemo<NavlinkStatusType>(() => {
		if (currentStep === steps.length + 1) {
			return 'active';
		}
		if (allStepsChecked) {
			return 'visited';
		}
		return 'blocked';
	}, [allStepsChecked, currentStep, steps.length]);

	if (isLoading || error) {
		return null;
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<HStack
				gap='16'
				justify='between'
				align='center'
			>
				<Navlink
					onClick={onNavlinkClick(0)}
					title={<HomeSvg />}
					text='Характеристики дома'
					status={getNavlinkStatus(0) === 'active' ? 'active' : 'visited'}
				/>
				<hr className={cls.line} />
				{steps.map((item, idx) => {
					return (
						<>
							<Navlink
								key={`navlink${idx}`}
								title={idx + 1}
								status={getNavlinkStatus(idx + 1)}
								text={item.title}
								onClick={onNavlinkClick(idx + 1)}
							/>
							<hr className={cls.line} />
						</>
					);
				})}
				<Navlink
					status={resultButtonStatus}
					title={<CalcSvg />}
					text='Результат'
					clickable={allStepsChecked}
					onClick={onNavlinkClick(steps.length + 1)}
				/>
			</HStack>
		</div>
	);
});
