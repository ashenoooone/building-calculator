import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import cls from './CalculatePrices.module.scss';
import HouseImg from '~/shared/assets/house.png';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import { Select } from '~/shared/ui/Select';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { CalculatePricesSchema } from '~/features/calculatePrices/model/types';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import { stepsActions } from '~/entities/Step';

export const CalculatePrices = () => {
	const dispatch = useAppDispatch();
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm<CalculatePricesSchema>({
		shouldUseNativeValidation: true,
		defaultValues: {
			floor: '1 этаж'
		}
	});

	const onSubmit = useCallback(
		(values: any) => {
			dispatch(stepsActions.setCurrentStep(1));
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
					onSubmit={handleSubmit(onSubmit)}
					className={cls.form}
				>
					<Controller
						control={control}
						name='area'
						render={({ field }) => (
							<Input
								label='Площадь дома'
								type='number'
								className='w-full'
								{...field}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'Поле обязательно для заполнения'
							},
							min: { value: 10, message: 'Минимальная плошадь - 10' },
							max: { value: 1000, message: 'Максимальная площадь - 1000' }
						}}
					/>
					<Controller
						render={({ field }) => (
							<Select
								label='Количество этажей'
								placeholder='Количество этажей'
								selectOptions={[
									{
										value: '1 этаж',
										content: '1 этаж'
									},
									{
										value: '2 этажа',
										content: '2 этажа'
									}
								]}
								{...field}
							/>
						)}
						name='floor'
						control={control}
					/>
					<Button type='submit'>Рассчитать</Button>
				</form>
			</Card>
		</div>
	);
};
