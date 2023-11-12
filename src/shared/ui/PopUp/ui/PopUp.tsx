import React, { Fragment, ReactNode, useCallback } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '~/shared/lib/classNames';
import cls from './PopUp.module.scss';

interface PopUpProps {
	statusOpen?: boolean;
	closeFunc?: () => void;
	children: ReactNode;
}

export const PopUp = (props: PopUpProps) => {
	const { statusOpen = false, closeFunc, children } = props;

	const closePopUp = useCallback(() => {
		closeFunc?.();
	}, [closeFunc]);

	// попап шириной 100% от родительского компонента
	return (
		<Transition
			appear
			show={statusOpen}
			as={Fragment}
		>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={closePopUp}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex flex-col min-h-full min-w-full'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className={classNames(cls.PopUp, {})}>
								<div className={classNames(cls.ContainerCloseButton, {})}>
									<svg
										onClick={closePopUp}
										xmlns='http://www.w3.org/2000/svg'
										color='white'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={3}
										stroke='currentColor'
										className='w-8 h-8 cursor-pointer hover:opacity-80'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</div>
								<div className='bg-none'>{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
