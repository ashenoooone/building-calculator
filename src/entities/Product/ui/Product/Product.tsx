import React, { InputHTMLAttributes, memo, useCallback, useMemo } from 'react';
import cls from './Product.module.scss';
import { Radio } from '~/shared/ui/Radio';
import { Card } from '~/shared/ui/Card';
import { Hint } from '~/shared/ui/Hint';
import { convertToRubbleFormat } from '~/shared/lib/convertToRubbleFormat';
import InfoSvg from '~/shared/assets/info.svg';
import { Checkbox } from '~/shared/ui/Checkbox';
import { classNames } from '~/shared/lib/classNames';

type ProductPropsType = 'checkbox' | 'radio';

type InputHTMLProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'onChange'
>;
interface ProductProps extends InputHTMLProps {
	className?: string;
	title: string;
	description: string;
	img: string;
	price: number;
	checked?: boolean;
	type?: ProductPropsType;
	onChange?: (isChecked: boolean) => void;
}

export const Product = memo((props: ProductProps) => {
	const {
		className = '',
		img,
		description,
		price,
		title,
		checked,
		type = 'checkbox',
		onChange,
		...rest
	} = props;

	const onChangeHandler = useCallback(() => {
		onChange(checked);
	}, [checked, onChange]);

	const controller = useMemo(() => {
		if (type === 'checkbox') {
			return (
				<Checkbox
					readOnly
					checked={checked}
					className={cls.controller}
				/>
			);
		}

		return (
			<Radio
				readOnly
				checked={checked}
				className={cls.controller}
			/>
		);
	}, [checked, type]);

	return (
		<Card
			paddings='paddings_m'
			border={!!checked}
			type='inverted'
			onClick={onChangeHandler}
			className={classNames(cls.Product, {}, [className])}
			{...rest}
		>
			{controller}
			<p>{title}</p>
			<Hint
				hint={description}
				trigger={<InfoSvg className={cls.icon} />}
			/>
			<img
				className={cls.image}
				src={img}
				alt={title}
			/>
			<p className={cls.price}>{convertToRubbleFormat(price)}</p>
		</Card>
	);
});
