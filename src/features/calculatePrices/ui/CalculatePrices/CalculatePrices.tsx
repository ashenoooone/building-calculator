import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import cls from './CalculatePrices.module.scss';
import HouseImg from '~/shared/assets/house.png';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import { Range } from '~/shared/ui/Range';
import { Select } from '~/shared/ui/Select';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';

export const CalculatePrices = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit = useCallback((values: any) => {
		console.log(values);
	}, []);

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
					<Range title='Площадь дома' />
					<Controller
						render={({ field }) => (
							<Input
								type='number'
								min={0}
								max={100}
								className='w-full'
								placeholder='Площадь дома'
								{...field}
							/>
						)}
						name='area'
						control={control}
					/>
					<Controller
						render={({ field }) => (
							<Select
								className='w-full'
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
