import React, { memo, useCallback } from 'react';
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

interface NavbarProps {
	className?: string;
}

const getNavlinkStatus = (
	idx: number,
	currentStep: number
): NavlinkStatusType => {
	if (idx === currentStep) {
		return 'active';
	}
	if (idx < currentStep) {
		return 'visited';
	}

	return 'blocked';
};

export const Navbar = memo((props: NavbarProps) => {
	const { className = '' } = props;
	const isLoading = useSelector(getStepsIsLoading);
	const error = useSelector(getStepsError);
	const steps = useSelector(getSteps);
	const currentStep = useSelector(getCurrentStep);
	const dispatch = useAppDispatch();

	const onNavlinkClick = useCallback(
		(step: number) => {
			return () => {
				dispatch(stepsActions.setCurrentStep(step));
			};
		},
		[dispatch]
	);

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
					status={getNavlinkStatus(0, currentStep)}
				/>
				<hr className={cls.line} />
				{steps.map((item, idx) => {
					return (
						<>
							<Navlink
								key={`navlink${idx}`}
								title={idx + 1}
								status={getNavlinkStatus(idx + 1, currentStep)}
								text={item.title}
								onClick={onNavlinkClick(idx + 1)}
							/>
							<hr className={cls.line} />
						</>
					);
				})}
				<Navlink
					status={getNavlinkStatus(steps.length - 1, currentStep)}
					title={<CalcSvg />}
					text='Результат'
				/>
			</HStack>
		</div>
	);
});
