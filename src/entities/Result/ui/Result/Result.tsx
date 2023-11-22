import React, { ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './Result.module.scss';
import {
	getResultSteps,
	getResultSumm,
	ResultSliceActions
} from '~/entities/Result';
import { ResultStep } from '../ResultStep/ResultStep';
import { Card } from '~/shared/ui/Card';
import HouseIcon from '~/shared/assets/home.svg';
import { Line } from '~/shared/ui/Line';
import { Text } from '~/shared/ui/Text';
import MoneyIcon from '~/shared/assets/money.svg';
import DownloadIcon from '~/shared/assets/download.svg';
import AgainIcon from '~/shared/assets/again.svg';
import { convertToRubbleFormat } from '~/shared/lib/convertToRubbleFormat';
import { Button } from '~/shared/ui/Button';
import {
	calculatePricesSliceActions,
	getCalculatePricesArea,
	getCalculatePricesFloor
} from '~/features/calculatePrices';
import { useAppDispatch } from '~/shared/lib/useAppDispatch';
import { stepsActions } from '~/entities/Step';

export const Result = () => {
	const stepResults = useSelector(getResultSteps);
	const totalPrice = useSelector(getResultSumm);
	const area = useSelector(getCalculatePricesArea);
	const floors = useSelector(getCalculatePricesFloor);
	const dispatch = useAppDispatch();

	const onDropClick = useCallback(() => {
		dispatch(ResultSliceActions.drop());
		dispatch(stepsActions.setCurrentStep(0));
		dispatch(calculatePricesSliceActions.setIsSubmitted(false));
	}, [dispatch]);

	return (
		<div className={cls.Result}>
			<div className={cls.header}>
				<Text title='Предварительная смета' />
				<div className={cls.buttons}>
					<Button className='flex items-center gap-sm'>
						<DownloadIcon className='w-6 h-6' />
						Скачать
					</Button>
					<Button
						className='flex items-center gap-sm'
						onClick={onDropClick}
					>
						<AgainIcon className='w-6 h-6' />
						Начать заново
					</Button>
				</div>
			</div>
			<div className={cls.main_content}>
				<div className={cls.results}>
					{stepResults.map((sr) => {
						return <ResultStep resultStep={sr} />;
					})}
				</div>
				<div className={cls.info}>
					<Card
						type='custom'
						className={cls.card}
					>
						<div className='mb-2 flex items-center justify-between'>
							<Text
								titleClasses='font-bold text-lg'
								title='Начальные параметры'
							/>
							<HouseIcon className='w-6 h-6' />
						</div>
						<ul className={cls.list}>
							<li className='flex justify-between items-baseline'>
								<span className='w-max shrink-0'>Площадь дома</span>
								<Line
									type='dashed'
									className='mx-2'
								/>
								<span className='shrink-0'>{area} м²</span>
							</li>
							<li className='flex justify-between items-baseline'>
								<span className='w-max shrink-0'>Этажей</span>
								<Line
									type='dashed'
									className='mx-2'
								/>
								<span className='shrink-0'>{floors}</span>
							</li>
						</ul>
					</Card>
					<Card
						type='custom'
						className={cls.card}
					>
						<div className='flex items-center justify-between'>
							<Text
								titleClasses='font-bold text-lg'
								title='Предварительная стоимость'
							/>
							<MoneyIcon className='w-6 h-6' />
						</div>
						<div className='text-gray-500'>
							<Text
								textClasses='mt-2'
								text='Расчет включает в себя оценку стоимости материалов и объемов выполненных работ. Общая предварительная оценка затрат предоставляется.'
							/>
						</div>
						<Line className='my-4' />
						<div className='flex justify-between'>
							<Text text='Общая стоимость' />
							<Text text={convertToRubbleFormat(totalPrice)} />
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};
