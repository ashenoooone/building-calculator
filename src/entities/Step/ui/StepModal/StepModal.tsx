import React, {
	ChangeEvent,
	FC,
	ReactNode,
	useCallback,
	useEffect
} from 'react';
import { useSelector } from 'react-redux';
import cls from './StepModal.module.scss';
import { getCurrentStep, IStep, stepsActions } from '~/entities/Step';
import { PopUp, PopUpProps } from '~/shared/ui/PopUp';
import { Navbar } from '~/widgets/Navbar';
import { classNames } from '~/shared/lib/classNames';
import { Product } from '~/entities/Product';
import { IComponent } from '~/entities/Step/model/types';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import { getComponentsByStep, ResultSliceActions } from '~/entities/Result';
import { checked } from '~/shared/ui/Radio/ui/Radio.stories';
import { Button } from '~/shared/ui/Button';

interface StepModalProps extends PopUpProps {
	className?: string;
	step?: IStep;
}

export const StepModal = (props: StepModalProps) => {
	const { className = '', step, ...popupProps } = props;
	const dispatch = useAppDispatch();
	const components = useSelector(getComponentsByStep);
	const currentStep = useSelector(getCurrentStep);

	const ifComponentChecked = (componentId: number): boolean => {
		return components?.values.some((i) => i.id === componentId);
	};

	const generateProductOnChangeHandler = useCallback(
		(c: IComponent) => {
			return (event: ChangeEvent<HTMLInputElement>) => {
				if (event.target.checked) {
					dispatch(
						ResultSliceActions.addComponentToStep({
							order: currentStep,
							component: c
						})
					);
				}
			};
		},
		[currentStep, dispatch]
	);

	useEffect(() => {
		dispatch(
			ResultSliceActions.addStep({
				order: currentStep,
				isMultiple: step.multipleSelect,
				values: []
			})
		);
	}, [currentStep, dispatch, step.multipleSelect]);

	const renderRadioGroup = useCallback(
		(p: IComponent) => {
			return (
				<Product
					checked={ifComponentChecked(p.id)}
					onChange={generateProductOnChangeHandler(p)}
					type='radio'
					title={p.title}
					description={p.title}
					img={p.imageUrl}
					price={p.price}
				/>
			);
		},
		[generateProductOnChangeHandler, ifComponentChecked]
	);

	const renderCheckboxGroup = useCallback((p: IComponent) => {
		return (
			<Product
				className={cls.product}
				type='checkbox'
				title={p.title}
				description={p.title}
				img={p.imageUrl}
				price={p.price}
			/>
		);
	}, []);

	const onCloseButtonClick = useCallback(() => {
		dispatch(stepsActions.setIsModalOpened(false));
	}, [dispatch]);

	const onNextStepClick = useCallback(() => {
		dispatch(stepsActions.setCurrentStep(currentStep + 1));
	}, [currentStep, dispatch]);

	return (
		<PopUp
			{...popupProps}
			className={classNames(cls.StepModal, {}, [className])}
		>
			<div className={cls.header}>
				<h2 className={cls.title}>{step.title}</h2>
				<p className={cls.description}>{step.description}</p>
				<Navbar />
			</div>
			<div className={cls.content}>
				{step.multipleSelect
					? step.components.map(renderCheckboxGroup)
					: step.components.map(renderRadioGroup)}
			</div>
			<div className={cls.footer}>
				<Button onClick={onCloseButtonClick}>Закрыть</Button>
				<Button onClick={onNextStepClick}>Далее</Button>
			</div>
		</PopUp>
	);
};
