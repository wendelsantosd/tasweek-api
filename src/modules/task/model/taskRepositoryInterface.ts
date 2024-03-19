import { Task } from './taskEntity';

export interface ITaskRepository {
	create(data: Task): Promise<Task>;
}
