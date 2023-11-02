import React, { InputHTMLAttributes, useMemo } from 'react';
import cls from './Product.module.scss';
import { Radio } from '~/shared/ui/Radio';
import { Card } from '~/shared/ui/Card';
import { Hint } from '~/shared/ui/Hint';
import { convertToRubbleFormat } from '~/shared/lib/convertToRubbleFormat';
import InfoSvg from '~/shared/assets/info.svg';
import { Checkbox } from '~/shared/ui/Checkbox';

type ProductPropsType = 'checkbox' | 'radio';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
interface ProductProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	title: string;
	description: string;
	img?: string;
	price: string;
	checked?: boolean;
	type?: ProductPropsType;
}

export const Product = (props: ProductProps) => {
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

	const controller = useMemo(() => {
		if (type === 'checkbox') {
			return (
				<Checkbox
					onChange={onChange}
					checked={checked}
					className={cls.controller}
				/>
			);
		}

		return (
			<Radio
				onChange={onChange}
				checked={checked}
				className={cls.controller}
			/>
		);
	}, [checked, onChange, type]);

	return (
		<Card
			paddings='paddings_m'
			border={!!checked}
			type='inverted'
			className={cls.Product}
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
				src={`data:image/svg+xml;base64,${img}`}
				alt={title}
			/>
			<p className={cls.price}>{convertToRubbleFormat(price)}</p>
		</Card>
	);
};
