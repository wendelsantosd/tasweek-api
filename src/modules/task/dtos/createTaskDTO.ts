import { DayEnum } from '../model/taskEntity';

export type CreateTaskDTO = {
	hour: string;
	task: string;
	day: DayEnum;
};
