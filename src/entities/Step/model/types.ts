export interface IComponent {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	jobPrice: number;
}

export interface IStep {
	id: number;
	title: string;
	multipleSelect: boolean;
	components?: IComponent[];
}

export interface StepsSchema {
	data?: {
		steps?: IStep[];
		currentStep?: number;
	};
	isLoading?: boolean;
	error?: string;
}
