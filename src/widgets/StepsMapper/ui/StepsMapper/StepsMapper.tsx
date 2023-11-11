import React from 'react';
import { useSelector } from 'react-redux';
import cls from './StepsMapper.module.scss';
import HouseImg from '~/shared/assets/house.png';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import { Button } from '~/shared/ui/Button';
import { getCurrentStepInfo } from '~/entities/Step';
import { PopUp } from '~/shared/ui/PopUp';

export const StepsMapper = () => {
	const currentStep = useSelector(getCurrentStepInfo);

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
					text='Параметры дома'
				/>
				<hr className='mt-4 mb-4' />
				<Text title='Общая стоимость' />
				<Button>Выбрать</Button>
				<PopUp
					statusOpen
					closeFunc={() => {}}
				>
					<div>0</div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</PopUp>
			</Card>
		</div>
	);
};
