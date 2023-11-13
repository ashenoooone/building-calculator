import React, { memo } from 'react';
import { classNames } from '~/shared/lib/classNames';
import { Card, CardStyle } from '~/shared/ui/Card';
import { Skeleton } from '~/shared/ui/Skeleton';

interface ProductSkeletonProps {
	className?: string;
	cardType?: CardStyle;
	border?: boolean;
}

export const ProductSkeleton = memo((props: ProductSkeletonProps) => {
	const { className = '', cardType = 'default', border = true } = props;
	return (
		<Card
			type={cardType}
			border={border}
			className={classNames(
				'flex justify-between min-h-[100px] items-center',
				{},
				[className]
			)}
		>
			<div className='flex items-center gap-sm'>
				<Skeleton
					width={25}
					height={25}
					borderRadius='8px'
				/>
				<Skeleton
					width={120}
					height={25}
				/>
				<Skeleton
					width={25}
					height={25}
					borderRadius='8px'
				/>
				<Skeleton
					width={35}
					height={35}
					borderRadius='8px'
				/>
			</div>
			<Skeleton
				width={120}
				height={25}
				borderRadius='8px'
			/>
		</Card>
	);
});
