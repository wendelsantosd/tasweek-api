import { ITaskRepository } from '../taskRepositoryInterface';
import { Task } from '../taskEntity';

export class TaskRepositoryInMemory implements ITaskRepository {
	private task: Task[] = [];
	async create(data: Task): Promise<Task> {
		return data;
	}
}
