import { IComponent } from '~/entities/Step';

export interface StepResult {
	id: number;
	order?: number;
	title: string;
	isMultiple?: boolean;
	values: IComponent[];
}

export interface ResultSchema {
	steps?: StepResult[];
}

export interface EditStepActionPayload {
	order: number;
	componentId: number;
}

export interface AddComponentToStepActionPayload {
	order: number;
	component: IComponent;
}
