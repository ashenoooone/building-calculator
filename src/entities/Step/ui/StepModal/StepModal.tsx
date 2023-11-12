import React, { FC, ReactNode, useCallback } from 'react';
import cls from './StepModal.module.scss';
import { IStep } from '~/entities/Step';
import { PopUp, PopUpProps } from '~/shared/ui/PopUp';
import { Navbar } from '~/widgets/Navbar';
import { classNames } from '~/shared/lib/classNames';
import { Product } from '~/entities/Product';
import { IComponent } from '~/entities/Step/model/types';

interface StepModalProps extends PopUpProps {
	className?: string;
	step?: IStep;
}

export const StepModal = (props: StepModalProps) => {
	const { className = '', step, ...popupProps } = props;

	const renderRadioGroup = useCallback((p: IComponent) => {
		return (
			<Product
				type='radio'
				title={p.title}
				description={p.title}
				img={p.imageUrl}
				price={p.price}
			/>
		);
	}, []);

	const renderCheckboxGroup = useCallback((p: IComponent) => {
		return (
			<Product
				type='checkbox'
				title={p.title}
				description={p.title}
				img={p.imageUrl}
				price={p.price}
			/>
		);
	}, []);

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
		</PopUp>
	);
};
