import { IComponent } from '~/entities/Step';

export interface StepResult {
	order?: number;
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
