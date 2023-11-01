import React from 'react';
import cls from './Navbar.module.scss';
import { Navlink } from '~/shared/ui/Navlink';
import { classNames } from '~/shared/lib/classNames';
import { HStack } from '~/shared/ui/Stack';

interface NavbarProps {
	className?: string;
}

const Navlist = [
	'Подготовительные работы',
	'Фундамент',
	'Окна/двери',
	'Стены',
	'Крыша',
	'Фасад',
	'Отопление',
	'Отделка',
	'Кондиционирование'
];

export const Navbar = (props: NavbarProps) => {
	const { className = '' } = props;
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<h2 className={cls.title}>Этапы:</h2>
			<HStack
				gap='16'
				justify='between'
				align='center'
			>
				{Navlist.map((item, idx) => {
					return (
						<>
							<Navlink
								title={idx + 1}
								text={item}
							/>
							{idx < Navlist.length - 1 && <hr className={cls.line} />}
						</>
					);
				})}
			</HStack>
		</div>
	);
};
