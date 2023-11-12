import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './StepsMapper.module.scss';
import HouseImg from '~/shared/assets/house.png';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import { Button } from '~/shared/ui/Button';
import {
	getCurrentStepInfo,
	getIsStepModalOpened,
	StepModal,
	stepsActions
} from '~/entities/Step';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';

export const StepsMapper = () => {
	const currentStep = useSelector(getCurrentStepInfo);
	const isModalOpened = useSelector(getIsStepModalOpened);
	const dispatch = useAppDispatch();

	const onClosePopup = useCallback(() => {
		dispatch(stepsActions.setIsModalOpened(false));
	}, [dispatch]);

	const onOpenPopup = useCallback(() => {
		dispatch(stepsActions.setIsModalOpened(true));
	}, [dispatch]);

	return (
		<div className={cls.StepsMapper}>
			<img
				className={cls.image}
				src={HouseImg}
				alt='дом'
			/>
			<Card
				className={cls.card}
				type='inverted'
			>
				<Text
					titleClasses='font-bold text-[20px] text-primary'
					title={currentStep.title}
					textClasses='text-[16px] mt-2'
					text={currentStep.description}
				/>
				<hr className='mt-4 mb-4' />
				<Text title='Общая стоимость' />
				<Button
					className={cls.choose_btn}
					onClick={onOpenPopup}
				>
					Выбрать
				</Button>
				<StepModal
					statusOpen={isModalOpened}
					closeFunc={onClosePopup}
					step={{
						id: 1,
						title: 'Шаг№1',
						description: 'Desc',
						multipleSelect: false,
						components: [
							{
								id: 2,
								title: 'Компонент №1',
								imageUrl: 'https://i.imgur.com/MQQA2Dd.jpeg',
								price: '10000',
								jobPrice: '1000'
							},
							{
								id: 4,
								title: 'Компонент №2',
								imageUrl: 'https://i.imgur.com/MQQA2Dd.jpeg',
								price: '10000',
								jobPrice: '1000'
							}
						]
					}}
				/>
			</Card>
		</div>
	);
};
