import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface IComponent {
	id: number;
	title: string;
	imageUrl: string;
	price: string;
	jobPrice: string;
}

export interface IStep {
	id: number;
	title: string;
	multipleSelect: boolean;
	description: string;
	components?: IComponent[];
}

export interface StepsSchema {
	data?: {
		steps?: IStep[];
		currentStep?: number;
		isModalOpened?: boolean;
	};
	isLoading?: boolean;
	error?: FetchBaseQueryError;
}
