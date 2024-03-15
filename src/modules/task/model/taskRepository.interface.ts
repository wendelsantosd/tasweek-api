import { CreateTaskDTO } from '../dtos/createTaskDTO';
import { ITaskDoc } from './taskSchema';

export interface ITaskRepository {
	create(data: CreateTaskDTO): Promise<ITaskDoc>;
}
