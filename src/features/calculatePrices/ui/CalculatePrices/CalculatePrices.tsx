import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import cls from './CalculatePrices.module.scss';
import HouseImg from '~/shared/assets/house.png';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import { Select, valueType } from '~/shared/ui/Select';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import { stepsActions } from '~/entities/Step';
import { calculatePricesSliceActions } from '~/features/calculatePrices';
import { FloorType } from '~/features/calculatePrices/model/types';
import {
	getCalculatePricesArea,
	getCalculatePricesFloor
} from '../../model/selectors/calculatePricesSelectors';

export const CalculatePrices = () => {
	const dispatch = useAppDispatch();
	const floor = useSelector(getCalculatePricesFloor);
	const area = useSelector(getCalculatePricesArea);

	const onSubmit = useCallback(() => {
		dispatch(calculatePricesSliceActions.setIsSubmitted(true));
		dispatch(stepsActions.setCurrentStep(1));
	}, [dispatch]);

	const onAreaChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			let mappedValue: string | number | undefined =
				event.target.value.match(/\d+/g)?.[0];
			if (!mappedValue || mappedValue === '0') {
				dispatch(calculatePricesSliceActions.setArea(1));
			} else {
				mappedValue = +mappedValue > 1000 ? 1000 : +mappedValue;
				dispatch(calculatePricesSliceActions.setArea(+mappedValue));
			}
		},
		[dispatch]
	);
	const onFloorsChange = useCallback(
		(value: valueType) => {
			dispatch(calculatePricesSliceActions.setFloor(value as FloorType));
		},
		[dispatch]
	);

	return (
		<div className={cls.CalculatePrices}>
			<img
				className={cls.image}
				src={HouseImg}
				alt='дом'
			/>
			<Card type='inverted'>
				<Text
					titleClasses='font-bold text-[20px] text-primary'
					title='Строительный калькулятор'
					textClasses='text-[24px] mt-2'
					containerClasses='text-center'
					text='Параметры дома'
				/>
				<form
					onSubmit={onSubmit}
					className={cls.form}
				>
					<Input
						required
						value={area}
						label='Площадь дома'
						type='number'
						className='w-full'
						onChange={onAreaChange}
					/>
					<Select
						required
						value={floor}
						label='Количество этажей'
						placeholder='Количество этажей'
						selectOptions={[
							{
								value: 1,
								content: '1 этаж'
							},
							{
								value: 2,
								content: '2 этажа'
							}
						]}
						onChange={onFloorsChange}
					/>
					<Button type='submit'>Рассчитать</Button>
				</form>
			</Card>
		</div>
	);
};
