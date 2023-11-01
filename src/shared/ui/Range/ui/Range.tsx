import React, { ChangeEvent, FC, HTMLAttributes, useState } from 'react';
import style from './Range.module.scss';

interface RangeProps extends HTMLAttributes<HTMLInputElement> {
	step?: number;
	min?: number;
	max?: number;
}

export const Range: FC<RangeProps> = (props) => {
	const {
		defaultValue = 0,
		step = 1,
		title,
		min,
		max,
		onChange = () => {},
		...attributes
	} = props;
	const [value, setValue] = useState<number>(+defaultValue);

	const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(+e.target.value);
		onChange(e);
	};

	return (
		<div className={style.range}>
			<p className={style.title}>{title}</p>
			<p className={style.value}>{value}</p>
			<input
				{...attributes}
				step={step}
				min={min}
				max={max}
				className={style.input}
				type='range'
				value={value}
				onChange={handleValueChange}
			/>
		</div>
	);
};
