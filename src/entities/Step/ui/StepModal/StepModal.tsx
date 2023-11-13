import React, { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './StepModal.module.scss';
import {
	getCurrentStep,
	getCurrentStepInfo,
	stepsActions
} from '~/entities/Step';
import { PopUp, PopUpProps } from '~/shared/ui/PopUp';
import { Navbar } from '~/widgets/Navbar';
import { classNames } from '~/shared/lib/classNames';
import { Product, ProductSkeleton } from '~/entities/Product';
import { IComponent } from '~/entities/Step/model/types';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import {
	getComponentsByStep,
	getResultSumm,
	ResultSliceActions
} from '~/entities/Result';
import { Button } from '~/shared/ui/Button';
import { useGetStepQuery } from '~/entities/Step/api/stepsApi';
import { convertToRubbleFormat } from '~/shared/lib/convertToRubbleFormat';

interface StepModalProps extends PopUpProps {
	className?: string;
}

const getProductsSkeletons = () => {
	return new Array(5).fill(0).map((i) => {
		return <ProductSkeleton key={`productskeleton${i}`} />;
	});
};

export const StepModal = (props: StepModalProps) => {
	const { className = '', ...popupProps } = props;
	const dispatch = useAppDispatch();
	const components = useSelector(getComponentsByStep);
	const currentStep = useSelector(getCurrentStep);
	const summary = useSelector(getResultSumm);
	const { id: stepId } = useSelector(getCurrentStepInfo);
	const {
		data: step,
		isLoading,
		isError,
		isFetching
	} = useGetStepQuery(stepId);

	const ifComponentChecked = useCallback(
		(componentId: number): boolean => {
			return components?.values.some((i) => i.id === componentId);
		},
		[components?.values]
	);

	const generateRadioProductOnChangeHandler = useCallback(
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

	const generateCheckboxProductOnChangeHandler = useCallback(
		(c: IComponent) => {
			return (event: ChangeEvent<HTMLInputElement>) => {
				if (event.target.checked) {
					dispatch(
						ResultSliceActions.addComponentToStep({
							order: currentStep,
							component: c
						})
					);
				} else {
					dispatch(
						ResultSliceActions.removeComponentFromStep({
							order: currentStep,
							componentId: c.id
						})
					);
				}
			};
		},
		[currentStep, dispatch]
	);

	useEffect(() => {
		if (step && !isFetching && !isLoading && !isError) {
			dispatch(
				ResultSliceActions.addStep({
					order: currentStep,
					isMultiple: Boolean(step.multipleSelect),
					values: []
				})
			);
		}
	}, [currentStep, dispatch, isError, isFetching, isLoading, step]);

	const renderRadioGroup = useCallback(
		(p: IComponent) => {
			return (
				<Product
					checked={ifComponentChecked(p.id)}
					onChange={generateRadioProductOnChangeHandler(p)}
					type='radio'
					title={p.title}
					description={p.title}
					img={p.imageUrl}
					price={p.price}
				/>
			);
		},
		[generateRadioProductOnChangeHandler, ifComponentChecked]
	);

	const renderCheckboxGroup = useCallback(
		(p: IComponent) => {
			return (
				<Product
					checked={ifComponentChecked(p.id)}
					className={cls.product}
					onChange={generateCheckboxProductOnChangeHandler(p)}
					type='checkbox'
					title={p.title}
					description={p.title}
					img={p.imageUrl}
					price={p.price}
				/>
			);
		},
		[generateCheckboxProductOnChangeHandler, ifComponentChecked]
	);

	const onCloseButtonClick = useCallback(() => {
		dispatch(stepsActions.setIsModalOpened(false));
	}, [dispatch]);

	const onNextStepClick = useCallback(() => {
		dispatch(stepsActions.setCurrentStep(currentStep + 1));
	}, [currentStep, dispatch]);

	const content = useMemo(() => {
		if (isLoading) {
			return getProductsSkeletons();
		}

		return step.multipleSelect
			? step?.components.map(renderCheckboxGroup)
			: step?.components.map(renderRadioGroup);
	}, [isLoading, renderCheckboxGroup, renderRadioGroup, step]);

	if (isError) {
		return <h1>Error</h1>;
	}

	return (
		<PopUp
			{...popupProps}
			className={classNames(cls.StepModal, {}, [className])}
		>
			<div className={cls.header}>
				<h2 className={cls.title}>{step?.title}</h2>
				<p></p>
				<p className={cls.description}>
					{step?.description} <br /> Промежуточная стоимость{' '}
					{convertToRubbleFormat(summary)}
				</p>
				<Navbar />
			</div>
			<div className={cls.content}>{content}</div>
			<div className={cls.footer}>
				<Button onClick={onCloseButtonClick}>Закрыть</Button>
				<Button onClick={onNextStepClick}>Далее</Button>
			</div>
		</PopUp>
	);
};
