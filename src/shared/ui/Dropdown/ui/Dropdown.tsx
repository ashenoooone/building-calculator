import React, { FC, ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import ChevronUpIcon from '~/shared/assets/chevron_up.svg';
import { classNames } from '~/shared/lib/classNames';

interface DropdownProps {
	className?: string;
	trigger?: ReactNode;
	children?: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
	const { className = '', children, trigger } = props;
	return (
		<Disclosure
			as='div'
			className={classNames(cls.Dropdown, {}, [className])}
		>
			{({ open }) => (
				<>
					<Disclosure.Button
						className={classNames(
							cls.button,
							{
								[cls.button_open]: open
							},
							[]
						)}
					>
						{trigger}
						<ChevronUpIcon
							className={`${!open ? 'rotate-180 transform' : ''} h-5 w-5`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className={cls.panel}>{children}</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
