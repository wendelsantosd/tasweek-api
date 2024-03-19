import { DayProps } from '../model/taskEntity';

export type CreateTaskDTO = {
	hour: string;
	task: string;
	day: DayProps;
};
